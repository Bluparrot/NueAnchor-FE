import React from "react";
import leftFrameImg from "../../assets/Conferences/left-frame-img.png"; // Use your actual image path

const LeftFrameImage = () => (
  <div
    style={{
      width: "461px",
      height: "574.56px",
      borderRadius: "32px",
      overflow: "hidden",
      opacity: 1,
      position: "relative",
    }}
  >
    <img
      src={leftFrameImg}
      alt="Conference Audience"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "32px",
        transform: "rotate(0deg)",
        display: "block",
      }}
    />
  </div>
);

export default LeftFrameImage;