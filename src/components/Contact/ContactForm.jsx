import React, { useState } from "react";
import axios from "axios";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { personalDetails } from "../../constants";

const ContactForm = () => {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (!isValidEmail(userInput.email)) {
      setError({ ...error, email: true });
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(`https://portfoliomailer-backend.onrender.com/`, {
        ...userInput,
        to_email: personalDetails.email,
      });

      // Custom success message
      toast.success(
        "Your message has been submitted. I will reach out to you soon!"
      );
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Error sending message, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="mt-8 flex flex-col gap-4" onSubmit={handleSendMail}>
      <div className="flex flex-col gap-2">
        <label className="text-sm">Your Name:</label>
        <input
          type="text"
          className="bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
          required
          maxLength="100"
          value={userInput.name}
          onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
          onBlur={checkRequired}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm">Your Email:</label>
        <input
          type="email"
          className="bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
          required
          maxLength="100"
          value={userInput.email}
          onChange={(e) =>
            setUserInput({ ...userInput, email: e.target.value })
          }
          onBlur={() => {
            checkRequired();
            setError({ ...error, email: !isValidEmail(userInput.email) });
          }}
        />
        {error.email && (
          <p className="text-sm text-red-400">Please provide a valid email!</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm">Your Message:</label>
        <textarea
          className="bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
          required
          rows="4"
          maxLength="500"
          value={userInput.message}
          onChange={(e) =>
            setUserInput({ ...userInput, message: e.target.value })
          }
          onBlur={checkRequired}
        />
      </div>

      {error.required && (
        <p className="text-sm text-red-400">All fields are required!</p>
      )}

      <button
        type="submit"
        className="flex items-center gap-2 justify-center bg-gradient-to-r from-pink-500 to-violet-600 text-white py-2 rounded-full hover:bg-opacity-90 transition-all duration-200"
        disabled={isLoading}
      >
        {isLoading ? (
          <span>Sending...</span>
        ) : (
          <span className="flex items-center gap-1">
            Send Message <TbMailForward size={18} />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
