import React from "react";
import { assets, exclusiveOffers } from "../assets/assets";
import "./ExclusiveOffer.css";

export const ExclusiveOffers = () => {
  return (
    <>
      <div className="lgExcluDev p-6 ">
        <div>
          <h1 className="text-4xl text-center exCard md:text-[40px] font-playfair">
            Exclusive Offers
          </h1>
          <p className="text-sm text-center md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        <button className="exBtn mt-2 t">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className=" group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
      <div className="alignExcluImage ">
        <div className="offerCard p-1">
          {exclusiveOffers.map((item) => {
            return (
              <div
                key={item._id}
                className="group rounded-lg resartImgCard relative pb-4 h-58 flex flex-col items-start justify-between gap-1 pt-12 md:pt-14 px-4 rouunded-xl text-white bg-co-repeat bg-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
                  {" "}
                  {item.priceOff} % OFF
                </p>
                <div>
                  <p className="md:text-base py-2">{item.title}</p>
                  <p className="md:text-base text-sm">{item.description}</p>
                  <p className="py-1 text-sm md:text-base text-white-300">
                    Expires {item.expiryDate}
                  </p>
                </div>
                <button className="flex  gap-2 cursor-pointer ">
                  View Offers
                  <img
                    className="invert group-hover:translate-x-1 transition-all "
                    src={assets.arrowIcon}
                    alt="arrow-icon"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExclusiveOffers;
