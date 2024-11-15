import React from "react";
import { FiDownload } from "react-icons/fi"; // Using React Icons for the download icon
import { personalDetails } from "../../constants";

const GetResumeButton = () => {
  const resumeUrl = `${personalDetails.resume_link}&export=download`;

  return (
    <div className="fixed bottom-8 sm:bottom-6 right-4 sm:right-6 z-100 group">
      {/* Tooltip */}
      <div className="absolute -left-28 top-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity sm:hidden">
        Get Resume
      </div>

      {/* Button */}
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-12 sm:h-12 flex justify-center items-center rounded-full bg-[#915EFF] text-white shadow-lg hover:bg-[#151030] active:bg-[#151030] transition-all"
      >
        <FiDownload className="text-xl sm:text-lg" />
      </a>
    </div>
  );
};

export default GetResumeButton;
