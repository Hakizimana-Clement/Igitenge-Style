import React, { useState, useContext } from "react";
import { Button, Modal, Offcanvas, Stack } from "react-bootstrap";
import { CartContext } from "../context/CardContext";
import CardProduct from "./CardProduct";
export default function Navbar() {
  // for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for navbar to change color when user scoll down.
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 875) {
      setNavBar(true);
    } else if (
      window.scrollY >= 732 &&
      window.matchMedia("(max-width: 400px)")
    ) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // send data to server
  const checkout = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      {/* <nav className="navbar active navbar-expand-lg navbar-dark bg-dark nav-background"> */}
      <nav
        className={
          navBar
            ? "navbar active navbar-expand-lg navbar-dark"
            : "navbar navbar-expand-lg navbar-dark bg-dark nav-background"
        }
      >
        <div className="container-fluid navigation-Spacing">
          <a className="navbar-brand " href="/">
            Igitenge Style
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            data-bs-spy="scroll"
          >
            <ul className="navbar-nav m-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#products">
                  Products
                </a>
              </li>
              {/* <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#blog">
                    Blog
                  </a>
                </li> */}
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#aboutUs">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#contactUs">
                  Contact
                </a>
              </li>
            </ul>
            <button
              className="btn btn-danger "
              style={{ width: "6rem", height: "2.5rem" }}
              onClick={handleShow}
            >
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 904.86 902.86"
                style={{ width: "43%" }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path>{" "}
                      <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  transform: "translate(-33px, -36px)",
                }}
              >
                {productsCount > 0 ? productsCount : null}
                {/* {productsCount} */}
              </div>
            </button>
            {/* <Button
              style={{ width: "6rem", height: "2.5rem" }}
              variant="danger"
            >
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 904.86 902.86"
                style={{ width: "43%" }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path>{" "}
                      <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  transform: "translate(-33px, -36px)",
                }}
              >
                5
              </div>
            </Button> */}
          </div>
        </div>
      </nav>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Cart:</p>

              {cart.items.map((currentProduct, idx) => (
                <CardProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}

              <h2>Total:$ {cart.getTotalCost().toFixed(2)}</h2>

              <Button variant="success" onClick={checkout}>
                Purchase items!
              </Button>
            </>
          ) : (
            <p>There is no items in your cart!</p>
          )}
        </Modal.Body>
      </Modal> */}

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {productsCount > 0 ? (
            <Stack gap="3">
              {cart.items.map((currentProduct, idx) => (
                <CardProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}

              <div className="ms-auto fw-bold fs-5">
                Total: ${cart.getTotalCost().toFixed(2)}
              </div>
              <Button variant="success" onClick={checkout}>
                Checkout!
              </Button>
            </Stack>
          ) : (
            <p>There is no items in your cart! 😶</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
