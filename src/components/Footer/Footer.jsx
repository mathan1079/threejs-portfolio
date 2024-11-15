import React from "react";
import { styles } from "../../styles";
import { personalDetails } from "../../constants";
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
      <footer className={`${styles.paddingX} flex-col`}>
        <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-[11px] leading-[27px] text-white mb-5 sm:text-[16px]">
            {/* Copyright &copy; {year}. All Rights Reserved.
             */}
              &copy; {year} | Built with 💻 and {personalDetails.fav_emoji} by {personalDetails.name}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

