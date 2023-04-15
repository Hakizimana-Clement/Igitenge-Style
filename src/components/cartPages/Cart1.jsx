// const navigate = useNavigate();
////////////////////////////////////////////////
// const [radios, setRadios] = useState({
//   XS: "",
//   S: "",
//   M: "",
//   L: "",
//   XL: "",
// });
// console.log(radios);
////////// checking radio ////////////
// const addSize = (e) => {
//   console.log(e.target.value);
// };
/////////////////////////////////////
////////// send all in form  ////////

// const handleCart = (e) => {
//   e.preventDefault();
//   console.log(e.target.name);
//   console.log("clicked");
//   // setRadios(e.target.value);
// };
// const [error, setError] = useState(null);

// const submitFrom = () => {
//   fetch("/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [{ id: 1, quantity: 1 }],
//     }),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//       // if it's failed
//       return res.json().then((json) => Promise.reject(json));
//     })
//     .then(({ url }) => {
//       // window.location = url;
//       console.log(url);
//     })
//     .catch((e) => {
//       console.error(e.error);
//     });
//   // const json = await response.json();
//   // console.log(json);

//   // if(!response.ok){
//   //   setError(json.error)
//   // }
// };
// const [radios, setRadios] = useState("");
// const radionButton = (e) => {
//   const test = setRadios(e.target.value);
//   console.log(test);
// };
// const submitFrom = (e) => {
//   e.preventDefault();
//   console.log("clicked");
//   console.log(e.target.value);

// };
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import StripeCheckout from "react-stripe-checkout";
import Footer from "../Footer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function Cart1() {
  let startingNumber = 1;

  const [count, setCount] = useState(startingNumber);

  function handleAddClick(e) {
    e.preventDefault();
    const addOne = count + 1;
    setCount(addOne);
    const addPriceOne = addOne * 100;
    console.log(addPriceOne);
    console.log(addOne);
  }

  function handleSubstractClick(e) {
    e.preventDefault();
    if (count <= 1) {
      return;
    } else {
      const minusOne = count - 1;
      setCount(minusOne);
      const minusPriceOne = minusOne * 100;
      console.log(minusPriceOne);
    }
    console.log(count - 1);
  }
  ////////////////////////////////////////////////////////
  ///////////// alert /////////////////////
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      timer: "2000",
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      timer: "2000",
    });
  };
  ////////////////////////////////////////////
  const priceForStripe = count * 10000;
  const payNow = async (token) => {
    try {
      const response = await fetch("/api/payment/cart1", {
        method: "POST",
        body: {
          amount: count * 10000,
          token,
        },
        headers: {
          "Content-Type": "application",
        },
      });

      if (response.ok) {
        handleSuccess();
        console.log("successfully");
      }
    } catch (error) {
      console.log(error);
      handleFailure();
    }
  };

  const [gender, setGender] = useState("female");
  const handleGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };
  return (
    <>
      <div className="row cart">
        <div className="col-lg-7">
          <div className="cart-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0684/2619/products/Chane-Mens-African-Print-Shirt-1_2000x2000.jpg?v=1668456797"
              alt="placeholder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-5 cart-text ">
          <div>
            <h1>Igitenge shirt</h1>

            <p className="cart-price">
              <strong>Price: </strong> <span>100$</span>
            </p>
            <h3>Description:</h3>
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
          <form action="/api/test1" method="POST">
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
                <h3>Quantity:</h3>
                <div className="cart-quality-button">
                  <button onClick={handleSubstractClick}>-</button>
                  <h2>{count}</h2>
                  <button onClick={handleAddClick}>+</button>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 mt-4">
              <StripeCheckout
                label="pay now"
                name="Pay with credit card "
                stripeKey="pk_test_51MkVIDD9C3pt8rsM8cOyhiWdM2TQrDEcClKPQePKIniQdxZLEavew2rOX5OHoIzb8zLwHvDzaB2eqrlmEPnELCkX00WnRWUlaT"
                billingAddress
                shippingAddress
                amount={priceForStripe}
                description={`Your Total is $ ${count}00`}
                token={payNow}
              >
                <button className="btn btn-dark btn-lg buy-button">
                  Buy Now
                </button>
              </StripeCheckout>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
