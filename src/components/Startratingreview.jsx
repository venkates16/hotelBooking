import React from "react";
import { assets } from "../assets/assets";
export const Startratingreview = ({ rating = 4 }) => {
  return (
    <div className="flex gap-2">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="start-icon"
          />
        ))}
    </div>
  );
};

export default Startratingreview;
