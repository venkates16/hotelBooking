import React from "react";
import { roomsDummyData } from "../assets/assets";
import { HotelCard } from "./HotelCard";
import { useNavigate } from "react-router-dom";

export const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gray-50 py-18">
      {" "}
      <div className="text-center py-0">
        {" "}
        <h1 className="text-4xl md:text-[40px] font-playfair">
          Featured Destination
        </h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
          Discover our handpicked selection of exceptional properties around the
          world, offering unparalleled luxury and unforgettable experiences.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 ">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className=" text-small font-medium px-4 py-2 bg-white border border-gray-200 rounded mt-16 hover:bg-gray-50 tranisition-all cursor-pointer"
      >
        View All Distinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
