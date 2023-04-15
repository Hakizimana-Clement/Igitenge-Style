// gathering data from server
// import React, { useEffect, useState } from "react";
// // import StoreDetails from "./StoreDetails";
// export default function Test2() {
//   const [radioButton, setRadioButton] = useState({
//     email: "email",
//     phone: "phone",
//     mail: "mail",
//   });

//   console.log(radioButton);

//   function pressed(e) {
//     e.preventDefault();

//     // console.log(setRadioButton);
//     setRadioButton()
//   }
//   return (
//     // <form className="mt-5">
//     <>
//       <div>
//         <input
//           type="radio"
//           id="contactChoice1"
//           name="contact"
//           // value="email"
//           defaultChecked
//           value={radioButton.email}
//         />
//         <label for="contactChoice1">Email</label>

//         <input
//           type="radio"
//           id="contactChoice2"
//           name="contact"
//           // value="phone"
//           value={radioButton.phone}
//         />
//         <label for="contactChoice2">Phone</label>

//         <input
//           type="radio"
//           id="contactChoice3"
//           name="contact"
//           // value="mail"
//           value={radioButton.mail}
//         />
//         <label for="contactChoice3">Mail</label>
//       </div>
//       <div>
//         <button type="submit" onClick={pressed}>
//           Submit
//         </button>
//       </div>
//     </>
//     // </form>
//   );

//   // const [stores, setStores] = useState("");

//   // useEffect(() => {
//   //   const fetchStores = async () => {
//   //     const response = await fetch("/api/stores");
//   //     const json = await response.json();

//   //     if (response.ok) {
//   //       setStores(json);
//   //     }
//   //   };
//   //   fetchStores();
//   // }, []);
//   // return (
//   //   <>
//   //     <div style={{ border: "3px black solid" }} className="test2">
//   //       <h1>Store Items</h1>
//   //       {stores &&
//   //         stores.map((store) => <StoreDetails key={store._id} store={store} />)}
//   //     </div>
//   //     <form action="/create-checkout-session" method="POST">
//   //       <button className="btn btn-danger">checkout</button>
//   //     </form>
//   //   </>
//   // );
// }

// normal button

// import React, { useState } from "react";
// function Test2() {
//   const [gender, setGender] = useState();
//   console.log(gender);
//   return (
//     <div>
//       <input
//         type="radio"
//         name="gender"
//         value="XS"
//         onChange={(e) => setGender(e.target.value)}
//         defaultChecked
//       />{" "}
//       XS
//       <input
//         type="radio"
//         name="gender"
//         value="S"
//         onChange={(e) => setGender(e.target.value)}
//       />{" "}
//       S
//       <input
//         type="radio"
//         name="gender"
//         value="M"
//         onChange={(e) => setGender(e.target.value)}
//       />{" "}
//       M
//       <input
//         type="radio"
//         name="gender"
//         value="L"
//         onChange={(e) => setGender(e.target.value)}
//       />{" "}
//       L
//       <input
//         type="radio"
//         name="gender"
//         value="XL"
//         onChange={(e) => setGender(e.target.value)}
//       />{" "}
//       XL
//       <h1>{gender}</h1>
//     </div>
//   );
// }

// export default Test2;

// material ui radio button

import React, { useState } from "react";
import Radio from "@mui/material/Radio";

function Test2() {
  const [gender, setGender] = useState("female");
  const handleGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };
  return (
    <div>
      <div>
        <h1>Hello</h1>
        <span>Male </span>
        <Radio
          value="male"
          checked={gender === "male"}
          onChange={handleGender}
        />
      </div>
      <div>
        <span>female </span>
        <Radio
          value="female"
          checked={gender === "female"}
          onChange={handleGender}
        />
      </div>
      <div>
        <span>other </span>
        <Radio
          value="other"
          checked={gender === "other"}
          onChange={handleGender}
        />
      </div>
    </div>
  );
}

export default Test2;
