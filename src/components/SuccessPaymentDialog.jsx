import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const containerStyle = {
  // with: "48%",
  // padding: "0 4%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "3% 0 ",
};

const formStyle = {
  border: "2px blue solid",
  borderRadius: "15px",
  padding: "3%",
  background: "#2e7d32",
  color: "white",
  display: "flex",
  gap: "7px",
  marginTop: "5%",
};
export default function Payment() {
  return (
    <div style={containerStyle}>
      <h1 className="mb-3">Payment form</h1>
      <form style={formStyle}>
        <CheckCircleOutlineIcon />
        <p style={{ paddingBottom: "0" }}>Payment Successfully</p>
      </form>
    </div>
  );
}
