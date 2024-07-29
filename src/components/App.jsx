import React from "react";
import CardProvider from "../context/CardContext";
import AllRoutesAndPages from "./AllRoutes&Pages";
import Dialog from "./Dialog";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <CardProvider>
        <Navbar />
        <Dialog />
        <AllRoutesAndPages />
      </CardProvider>
    </>
  );
}
