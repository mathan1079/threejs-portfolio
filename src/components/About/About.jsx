import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services, personalDetails } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full xs:max-w-[220px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[15px] hover:shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[15px] py-4 px-6 sm:px-8 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-15 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
        />

        <h3 className="text-white text-[16px] sm:text-[16px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-4 sm:px-0">
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Overview.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[16px] max-w-full sm:max-w-3xl mx-auto sm:mx-0 leading-[24px] sm:leading-[30px] text-center sm:text-left px-4 sm:px-0 space-y-4"
      >
        {personalDetails.description.split("\n").map((paragraph, index) => (
          <p>{paragraph}</p>
        ))}
      </motion.div>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-6 justify-center px-3 sm:px-0">
        {services.map((service, index) => (
          <ServiceCard index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
