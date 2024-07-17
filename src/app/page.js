import React from "react";
import Hero from "../components/Home/Hero";
import Browse from "../components/Home/Browse";
import Trending from "../components/Home/Trending";
import Creators from "../components/Home/Creators";
import Upcoming from "../components/Home/Upcoming";

const page = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <Creators />
      <Browse />
      <Upcoming />
    </div>
  );
};

export default page;
