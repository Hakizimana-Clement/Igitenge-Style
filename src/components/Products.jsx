import React from "react";
import Slide from "react-reveal/Slide";
import CardImages from "./CardImages";
export default function Products() {
  return (
    <section className="products" id="products">
      <Slide bottom>
        <h1>Our Products</h1>
      </Slide>
      {/* <CardImage /> */}
      <CardImages />
    </section>
  );
}
