import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { awards } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ViewMoreButton from "../buttons/ViewMore";

// Sort projects by date
awards.sort((a, b) => {
  const dateA = new Date(a.year_of_award);
  const dateB = new Date(b.year_of_award);
  return dateB - dateA;
});

const AwardsCard = ({
  index,
  title,
  points,
  company_name,
  location,
  image,
  year_of_award,
  isInitialSet,
}) => {
  const cardContent = (
    <div className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full sm:w-[500px]">
      <div className="relative w-full h-[180px] sm:h-[230px] ">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-3 sm:mt-4">
        <h3 className="text-white font-bold text-base sm:text-[24px]">
          🏆 {title}
        </h3>
        {/* <p className="mt-2 text-secondary text-xs sm:text-sm line-clamp-3 sm:line-clamp-6">
          {points}
        </p> */}
        <div className="mt-4 ">
          <ul className="list-disc ml-4 sm:ml-5 space-y-2">
            {points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-secondary text-[12px] sm:text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-3 sm:mt-4">
        {company_name && (
          <div className="">
            <p className="text-white text-xs sm:text-sm">{company_name}, {location}.</p>
          </div>
        )}
        {year_of_award && (
          <div className="">
            <p className="text-white text-xs sm:text-sm">{year_of_award}</p>
          </div>
        )}
      </div>
    </div>
  );

  return isInitialSet ? (
    <motion.div
      variants={fadeIn("down", "spring", index * 0.5, 0.75)}
      className="golden-gradient p-[1.5px] rounded-[15px] shadow-card"
    >
      {cardContent}
    </motion.div>
  ) : (
    <div>{cardContent}</div>
  );
};

const Awards = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const showMoreAwards = () => {
    if (visibleCount + 3 >= projects.length) {
      setVisibleCount(projects.length);
      setShowAll(true);
    } else {
      setVisibleCount((prevCount) => prevCount + 3);
    }
  };

  const closeUpAwards = () => {
    setVisibleCount(6);
    setShowAll(false);
  };

  return (
    <>
      <motion.div variants={textVariant()} className="px-4 sm:px-0">
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          What I’ve Been Recognized For
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Achievements & Awards
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-sm sm:text-base max-w-full sm:max-w-3xl leading-[20px] sm:leading-[30px] px-4 sm:px-0 text-center sm:text-left"
        >
          Recognized for multiple achievements that showcase my dedication to
          innovation, collaboration, and excellence. These awards reflect my
          ability to deliver impactful results, foster teamwork, and contribute
          to meaningful projects. Each milestone represents my ongoing
          commitment to professional growth and success.
        </motion.p>
      </div>

      <div className="mt-8 sm:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center">
        {awards.slice(0, visibleCount).map((project, index) => (
          <AwardsCard
            key={`project-${index}`}
            index={index}
            isInitialSet={index < 6}
            {...project}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {visibleCount < awards.length && !showAll && (
          <ViewMoreButton onClick={showMoreAwards} label="View More" />
        )}
        {showAll && (
          <ViewMoreButton onClick={closeUpAwards} label="View Less" />
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Awards, "awards");
