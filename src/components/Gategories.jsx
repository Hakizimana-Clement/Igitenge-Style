import React from "react";
// import IgitengeImages from "../IgitengeImages";
import Images from "./Images";
// const [image] = IgitengeImages;
// const { image1 } = image;
// import NavBar from "./NavBar";
function Gategories() {
  return (
    <div>
      {/* <NavBar /> */}
      <section className="container-fuild categories-section">
        <div className="try">
          <h2>Our Products</h2>
          <Images />
        </div>
      </section>
      {/* <h2>shop with us</h2>
      <div classname="Gategories-section">
        <div className="card-image">
          <div className="box1  ">
            <img src={image1} alt="sytle" />
          </div>
          <div className="box11">
            <img src={image1} alt="sytle" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Gategories;

// {
//   /* <div className="box2  "></div>
// <div className="box3  "></div> */
// }
