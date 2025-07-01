import React from "react";
import { BoxReveal } from "../magicui/box-reveal";

const Title = ({ title, tagline }) => {
  return (
    <>
      <div>
        <BoxReveal boxColor={"#422ad5"} duration={0.8}>
          <span className="uppercase text-primary text-xs font-semibold dark:text-white">
            {tagline}
          </span>
        </BoxReveal>
        <BoxReveal boxColor={"#422ad5"} duration={0.8}>
          <h3 className="uppercase text-3xl font-bold italic ">{title}</h3>
        </BoxReveal>
      </div>
    </>
  );
};

export default Title;
