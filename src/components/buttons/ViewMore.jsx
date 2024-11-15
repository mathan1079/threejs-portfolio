import React from "react";
import styled from "styled-components";

const ViewMoreButton = ({ onClick, label }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} className="button">
        <svg
          className={`svgIcon ${label === "View More" ? "rotate-180" : ""}`}
          viewBox="0 0 384 512"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
        <span className="button-label">{label}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #915eff;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button-label {
    display: none; /* Hidden by default */
    font-size: 14px;
    color: white;
    margin-left: 8px;
    white-space: nowrap;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    background-color: #050816;
    transition-duration: 0.3s;
  }

  .button:hover .svgIcon {
    transform: translateY(200%); /* Slide icon out on hover */
  }

  .button:hover .button-label {
    display: block; /* Show label on hover */
  }
`;

export default ViewMoreButton;
