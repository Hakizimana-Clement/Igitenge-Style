import React from "react";
import Navbar from "./Navbar";
import AllRoutesAndPages from "./AllRoutes&Pages";
import Dialog from "./Dialog";
import CardProvider from "../context/CardContext";
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
