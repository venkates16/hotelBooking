import React from "react";
import { testimonials } from "../assets/assets";
import Startratingreview from "./Startratingreview";

export const Testmonoals = () => {
  return (
    <div className="flex mt-3 flex-col items-center px-6 md:px-16 lg:px-24 bg-gray-50 py-14">
      <div className="flex flex-col items-center m-4 ">
        <h1 className="text-4xl text-center exCard md:text-[40px] font-playfair ">
          What Our Guests Say
        </h1>
        <p className=" text-sm text-center md:text-base text-gray-500/90 mt-2 max-w-174">
          Discover why discerning travelers consistently choose QuickStay for
          their exclusive and luxurious accommodations around the world.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-4 rounded-xl shadow max-w-lg"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <Startratingreview />
            </div>

            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testmonoals;
