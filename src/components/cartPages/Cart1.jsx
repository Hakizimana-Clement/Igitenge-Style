import React, { useContext } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Footer from "../Footer";
// import { ibitengeImageStore } from "../IbitengeImageStore";
// import { CardContext } from "../../context/CardContext";
// import Products from "../Products";

export default function Cart1(props) {
  // const cart = useContext(CardContext);
  // const productQuantity = cart.getProductQuantity(products.id);
  // const product = ibitengeImageStore;
  const product = props.product;
  return (
    <>
      <div className="row cart">
        <div className="col-lg-7">
          <div className="cart-image">
            <img src={product.img} alt={product.title} className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-5 cart-text ">
          <div>
            <h1>{product.title}</h1>

            <p className="cart-price">
              <strong>Price: </strong> <span>{product.price}</span>
            </p>
            <h2>Description:</h2>
            <ul>
              <li>Button-Up Shirt</li>
              <li>Pocket on Wearer's Left Side</li>
              <li>Curved Hem</li>
              <li>100% Cotton Ankara Body</li>
              <li>
                97% Cotton/ 3% Lycra Poplin Contrast Fabric at the Welt Pocket,
                Hidden Placket and the Inner Sleeve Cuff
              </li>
            </ul>
            <h3>Care:</h3>
            <ul>
              <li>Dry clean only.</li>
            </ul>
          </div>
          <div className="cart-quality">
            <h3>Select size:</h3>
            <FormControl>
              <RadioGroup
                row
                defaultValue="XS"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="size"
                type="submit"
              >
                <FormControlLabel value="XS" control={<Radio />} label="XS" />
                <FormControlLabel value="S" control={<Radio />} label="S" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
                <FormControlLabel value="L" control={<Radio />} label="L" />
                <FormControlLabel value="XL" control={<Radio />} label="XL" />
              </RadioGroup>
            </FormControl>
            <div>
              <h2>Quantity:</h2>
              <div className="cart-quality-button">
                <button>-</button>
                <h2>3</h2>
                <button>+</button>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 mt-4">
            <button className="btn btn-dark btn-lg buy-button">Buy Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
