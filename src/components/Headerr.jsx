import React from "react";
import WelcomingMessage from "./WelcomingMessage";
import Carousel from "./Carousel";
export default function Headerr() {
  return (
    <section className="sub-main row ">
      <WelcomingMessage />
      <Carousel />
    </section>
  );
}
