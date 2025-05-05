import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import { ExclusiveOffers } from "../components/ExclusiveOffers";
import Testmonoals from "../components/Testmonoals";
import Newsletter from "../components/Newsletter";

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testmonoals />
      <Newsletter />
    </>
  );
};
