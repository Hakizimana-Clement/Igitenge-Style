import React from "react";
import { useNavigate } from "react-router-dom";
// import SuccessPaymentDialog from "./SuccessPaymentDialog";
const containerStyle = {
  // with: "48%",
  // padding: "0 4%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "7% 0 3% ",
};

// const paymentFormStyle = {
//   background: "grey",
// };

const formStyle = {
  border: "2px blue #dc3545b0",
  // borderRadius: "5%",
  // padding: "3%",
  background: "white",
  padding: "4% 3%  4%",
  borderRadius: "15px",
};
export default function Payment() {
  const navigate = useNavigate();
  return (
    <div style={containerStyle}>
      <h1 className="mb-3">Payment form</h1>
      <form style={formStyle}>
        <div class="mb-3">
          <label class="form-label" for="cc-number">
            Card number
          </label>
          <input
            id="cc-number"
            name="cc-number"
            autocomplete="cc-number"
            inputmode="numeric"
            maxlength="50"
            pattern="[\d ]{10,30}"
            required
            class="form-control"
          />
        </div>

        <div class="mb-3">
          <label className="form-label" for="cc-name">
            Name on card
          </label>
          <input
            id="cc-name"
            name="cc-name"
            autocomplete="cc-name"
            maxlength="50"
            pattern="[\p{L} \-\.]+"
            className="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label className="form-label" for="cc-exp">
            Expiry date
          </label>
          <input
            id="cc-exp"
            name="cc-exp"
            autocomplete="cc-exp"
            placeholder="MM/YY"
            maxlength="5"
            className="form-control"
            required
          />
        </div>
        <div class="row">
          <div class="col">
            <label className="form-label" for="cc-exp">
              Expiry date
            </label>
            <input
              id="cc-exp"
              name="cc-exp"
              autocomplete="cc-exp"
              placeholder="MM/YY"
              maxlength="5"
              className="form-control"
              required
            />
          </div>
          <div class="col">
            <label className="form-label" for="cc-csc">
              Security code
            </label>
            <input
              id="cc-csc"
              name="cc-csc"
              inputmode="numeric"
              maxlength="3"
              className="form-control"
              required
              type="password"
            />
            <label style={{ fontSize: "12px" }}>
              Back of card, last 3 digits
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            id="complete-payment"
            className="btn btn-danger mt-5"
            onClick={() => navigate("success")}
          >
            Complete payment
          </button>
        </div>
      </form>
    </div>
  );
}
