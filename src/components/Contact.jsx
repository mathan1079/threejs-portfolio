import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks } from "../constants";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form className="mt-12 flex flex-col gap-8">
          {socialLinks.map(({ username, platform, url, image }, key) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              <div className="mt-2 flex justify-between items-center gap-1">
                <img
                  src={image}
                  alt="waving-hand"
                  className="w-10 h-10 rounded-full object-cover mr-8"
                />
                <div className="flex-1 flex flex-col">
                  <p className="text-white font-medium text-[16px]">
                    <span className="blue-text-gradient">{platform}</span>
                  </p>
                  <p className="mt-1 text-secondary text-[15px]">@{username}</p>
                </div>
              </div>
            </a>
          ))}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
