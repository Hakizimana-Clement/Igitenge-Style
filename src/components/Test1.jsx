import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
const MySwal = withReactContent(Swal);

export default function Test1() {
  // const [wo, setWo] = useState("");
  const [product, setProduct] = useState({
    name: "Headphone ",
    price: 5,
  });

  const priceForStripe = product.price * 100;
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: "2000",
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: "2000",
    });
  };

  const payNow = async (token) => {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify({
          amount: product.price * 100,
          token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Your payment successfully");
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  // const handleChange = async (e) => {
  //   console.log(e.target.value);
  //   const radio = e.target.value;
  //   const response = await fetch("/api/test1", {
  //     method: "POST",
  //     body: JSON.stringify(radio),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const json = await response.json();

  //   if (response.ok) {
  //     console.log(json);
  //   }
  // };

  // const testing = async (e) => {
  //   e.preventDefault();
  //   const mayBe = wo;
  //   const response = await fetch("api/test1", {
  //     method: "POST",
  //     body: JSON.stringify(mayBe),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });

  //   const json = await response.json();

  //   if (response.ok) {
  //     setWo(json);
  //   }
  // };

  return (
    <>
      <div className="test2">
        <h1>Payment</h1>
        <p>
          <span>product:</span>
          {product.name}
        </p>
        <p>
          <span>price:</span>
          {product.price}
        </p>
        <StripeCheckout
          name="Pay with credit card "
          stripeKey="pk_test_51MkVIDD9C3pt8rsMNahLTyx0VkileQdMuXz6q4ugBXa4WIA5bIhcXtsoolQjlPfWuATrReN7F4XzGF9QU9hdONb2001j94Xajx"
          billingAddress
          shippingAddress
          amount={priceForStripe}
          description={"Total amount is $ ${product.price"}
          token={payNow}
        />
      </div>
      <div>
        {/* <FormControl>
          <RadioGroup
            row
            defaultValue="XS"
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={handleChange}
            name="size"
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
        </FormControl> */}

        <form action="">
          <label htmlFor="yoo">LARGE SIZE</label>
          <input
            type="radio"
            name="xl"
            id="yoo"
            // value={wo}
            // onClick={(e) => setWo(e.target.value)}
          />
          <button type="submit">Sumbit</button>
        </form>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* New trailer */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      <form>
        <fieldset>
          <legend>Please select your preferred contact method:</legend>
          <div>
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
              checked
            />
            <label for="contactChoice1">Email</label>

            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="phone"
            />
            <label for="contactChoice2">Phone</label>

            <input
              type="radio"
              id="contactChoice3"
              name="contact"
              value="mail"
            />
            <label for="contactChoice3">Mail</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
