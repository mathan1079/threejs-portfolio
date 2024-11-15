import React, { useState, useEffect } from "react";

const TypingEffect = ({ roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const typingSpeed = 50; // Typing speed in ms

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    const type = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      } else {
        timer = setTimeout(type, typingSpeed);
      }
    };

    timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span
        className="ml-1 w-[1px] h-5 bg-white animate-blink"
        style={{ animation: "blink 0.7s steps(1) infinite" }}
      />
    </span>
  );
};

export default TypingEffect;
