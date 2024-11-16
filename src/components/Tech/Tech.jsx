import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";

const Tech = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.2, // Trigger when 20% of the card is visible
      }
    );

    const elements = containerRef.current.querySelectorAll(".tech-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I bring to the table
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Skills.
        </h2>
      </motion.div>

      <div
        ref={containerRef}
        className="flex flex-row flex-wrap justify-center gap-5 sm:gap-10 mt-6 sm:mt-10 px-4 sm:px-0"
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className="tech-card"
            data-index={index}
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleIndexes.includes(index)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{
              type: "tween",
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">
                {technology.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
