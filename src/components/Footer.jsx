import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div>
      {" "}
      <div className="text-gray-500/80 bg-[#F6F9Fc] pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          <div className="max-w-80">
            <img
              src={assets.logo}
              alt="logo"
              className="mb-4 h-8 md:h-9 invert"
            />
            <p className="text-sm">
              Discover the world's most extraordinary places to stay, from
              boutique hotels to luxury villas and private islands.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {/* Instagram */}
              <img
                src={assets.facebookIcon}
                className="w-6"
                alt="facebookIcon"
              />
              <img
                src={assets.linkendinIcon}
                className="w-6"
                alt="linkInIcon"
              />
              <img src={assets.twitterIcon} className="w-6" alt="twitterIcon" />
              <img
                src={assets.instagramIcon}
                className="w-6"
                alt="instagramIcon"
              />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-800">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm font-playfair">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-gray-800">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Information</a>
              </li>
              <li>
                <a href="#">Cancellation Options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>

          <div className="max-w-80">
            <p className="text-lg text-gray-800">STAY UPDATED</p>
            <p className="mt-3 text-sm">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="bg-white rounded-l border border-gray-300 h-9 px-3 w-[100%] outline-none"
                placeholder="Your email"
              />
              <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
                {/* Arrow icon */}
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-8" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <p>
            © {new Date().getFullYear()} Brand. All rights reserved By Venkates.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
