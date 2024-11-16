import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "1.25rem", // Use rem for responsive padding
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[50%] h-[50%] sm:w-[60%] sm:h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-sm sm:text-base md:text-lg font-semibold"
          style={{ margin: 0 }}
        >
          <a href={experience.link} target="_blank" rel="noopener noreferrer">
            {experience.company_name}
          </a>
        </p>
      </div>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-xs sm:text-sm md:text-base pl-1 tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-4 sm:px-0">
        <p
          className={`${styles.sectionSubText} text-center text-sm sm:text-base md:text-lg`}
        >
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center text-2xl sm:text-3xl md:text-4xl`}
        >
          Career Timeline.
        </h2>
      </motion.div>

      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col">
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
