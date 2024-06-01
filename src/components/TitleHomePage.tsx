"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TitleHomePage = () => {
  return (
    <h2 className="text-2xl text-center lg:text-5xl">
      I'm just a little guy who wants to be a good
      <TypeAnimation
        sequence={[
          " Programer",
          2500,
          " Developer",
          2500,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-blue-500"
      />
      .
    </h2>
  );
};

export default TitleHomePage;
