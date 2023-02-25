import React from "react";
import "../Appp.css";
import Navbar from "./Navbar";
import AllRoutesAndPages from "./AllRoutes&Pages";
import Dialog from "./Dialog";

export default function App() {
  return (
    <>
      <Navbar />
      <Dialog />
      <AllRoutesAndPages />
    </>
  );
}
