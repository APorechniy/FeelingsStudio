import React from "react";

const StarIcon = ({ fill }) => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0.49884L9.79611 6.0267H15.6085L10.9062 9.44311L12.7023 14.971L8 11.5546L3.29772 14.971L5.09383 9.44311L0.391548 6.0267H6.20389L8 0.49884Z"
      fill={fill ? "#FF9142" : "none"}
    />
  </svg>
);

export default StarIcon;
