import React, { Suspense, lazy } from "react";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

// Lazy-load the BallCanvas component
const BallCanvas = lazy(() => import("../canvas/Ball"));

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I bring to the table
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Skills.
        </h2>

        <div className="flex flex-row flex-wrap justify-center gap-5 sm:gap-10 mt-6 sm:mt-10 px-4 sm:px-0">
          {technologies.map((technology) => (
            <div className="w-20 h-20 sm:w-28 sm:h-28" key={technology.name}>
              {/* Suspense for lazy-loading */}
              <Suspense fallback={<div>Loading...</div>}>
                <BallCanvas icon={technology.icon} />
              </Suspense>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
