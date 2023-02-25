import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function Cart1() {
  const navigate = useNavigate();

  let startingNumber = 1;

  const [count, setCount] = useState(startingNumber);

  function handleAddClick() {
    setCount(count + 1);
  }

  function handleSubstractClick() {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div className="row cart">
        <div className="col-lg-7">
          <div className="cart-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0684/2619/products/Womens-Kulale-Maxi-Dress-Olive-Geometric_971x1371.png?v=1654799470"
              alt="placeholder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-5 cart-text ">
          <div>
            <h1>Igitenge Dress</h1>

            <p className="cart-price">
              <strong>Price: </strong> 300$
            </p>
            <h3>Description:</h3>
            <ul>
              <li> V-Neck Bust</li>
              <li>Gathered Bust that Ties at Shoulders</li>
              <li>Ruffle at Front of Waist</li>
              <li>Gathered Tier at Skirt</li>
              <li>Invisible Zipper at Back</li>
              <li>2 Pockets at Side</li>
              <li>100% Cotton Ankara Fabric</li>
            </ul>
            <h3>Care:</h3>
            <ul>
              <li>
                Hand wash separately. Use mild detergent. Do not bleach. Hang to
                dry. Iron inside out.
              </li>
            </ul>
          </div>
          <div className="cart-quality">
            <h3>Select size:</h3>
            <FormControl>
              <RadioGroup
                row
                defaultValue="XS"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="XS" control={<Radio />} label="XS" />
                <FormControlLabel value="S" control={<Radio />} label="S" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
                <FormControlLabel value="L" control={<Radio />} label="L" />
                <FormControlLabel
                  value="XL"
                  control={<Radio />}
                  label="XL"
                  color="danger"
                />
              </RadioGroup>
            </FormControl>

            <div>
              <h3>Quantity:</h3>
              <div className="cart-quality-button">
                <button onClick={handleSubstractClick}>-</button>
                <h2>{count}</h2>
                <button onClick={handleAddClick}>+</button>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 mt-4">
            <button
              className="btn btn-dark btn-lg"
              onClick={() => navigate("checkout")}
            >
              <ShoppingCartIcon />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {/* <Comment /> */}
      <Footer />
    </>
  );
}
