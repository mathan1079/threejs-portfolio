import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { socialLinks } from "../../constants";
import ContactForm from "./ContactForm";

// Lazy-load the EarthCanvas component
const EarthCanvas = lazy(() => import("../canvas/Earth"));

// Hook to check if screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        {/* Contact Form */}
        <ContactForm />

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-5">
          {socialLinks.map(({ url, image }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10"
              aria-label={`Link to social profile ${index + 1}`}
            >
              <img src={image} alt="social link" className="w-full h-full object-cover rounded-full" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Conditional rendering for EarthCanvas on larger screens only */}
      {!isMobile && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <Suspense fallback={<div className="text-white text-center">Loading 3D Model...</div>}>
            <EarthCanvas />
          </Suspense>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
