import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { github, live } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ViewMoreButton from "../buttons/ViewMore";
import TimeSince from "../TimeSince/TimeSince";

// Sort projects by date
projects.sort((a, b) => {
  const dateA = new Date(a.project_date);
  const dateB = new Date(b.project_date);
  return dateB - dateA;
});


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_live_link,
  project_date,
  isInitialSet,
}) => {
  const cardContent = (
    <div className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full sm:w-[360px]">
      <div className="relative w-full h-[180px] sm:h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        {source_code_link && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
        {project_live_link && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex">
            <div
              onClick={() => window.open(project_live_link, "_blank")}
              className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={live}
                alt="live link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 sm:mt-4">
        <h3 className="text-white font-bold text-base sm:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-xs sm:text-sm line-clamp-3 sm:line-clamp-6">
          {description}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1 sm:gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[10px] sm:text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      {project_date && (
        <div className="mt-3 sm:mt-4">
          <p className="text-secondary text-xs sm:text-sm">
            <TimeSince dateString={project_date} />
          </p>
        </div>
      )}
    </div>
  );

  return isInitialSet ? (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {cardContent}
    </motion.div>
  ) : (
    <div>{cardContent}</div>
  );
};

const Works = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const showMoreProjects = () => {
    if (visibleCount + 3 >= projects.length) {
      setVisibleCount(projects.length);
      setShowAll(true);
    } else {
      setVisibleCount((prevCount) => prevCount + 3);
    }
  };

  const closeUpProjects = () => {
    setVisibleCount(6);
    setShowAll(false);
  };

  return (
    <>
      <motion.div variants={textVariant()} className="px-4 sm:px-0">
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          What I've built so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-sm sm:text-base max-w-full sm:max-w-3xl leading-[20px] sm:leading-[30px] px-4 sm:px-0 text-center sm:text-left"
        >
          These projects highlight my skills and experience through real-world examples, showcasing
          my ability to solve complex problems, work with various technologies, and manage projects
          effectively. Each includes a brief description with links to code repositories and live
          demos.
        </motion.p>
      </div>

      <div className="mt-8 sm:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center">
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} isInitialSet={index < 6} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {visibleCount < projects.length && !showAll && (
          <ViewMoreButton onClick={showMoreProjects} label="View More" />
        )}
        {showAll && (
          <ViewMoreButton onClick={closeUpProjects} label="View Less" />
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");