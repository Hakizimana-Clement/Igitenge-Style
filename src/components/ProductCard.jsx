import React, { useContext, useState } from "react";
import { Card, Button, Form, Row, Col, Modal } from "react-bootstrap";
import { CartContext } from "../context/CardContext";
// import { useContext } from "react";
function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  // console.log(cart.items);

  // testing

  // eslint-disable-next-line no-undef
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.img}
          height="400px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-3">{product.title}</span>
            <span className="ms-2 text-muted">${product.price}</span>
          </Card.Title>
          <div className="mt-auto">
            {/* {productQuantity > 0 ? (
              <>
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <Button onClick={() => cart.removeOneToCart(product.id)}>
                      -
                    </Button>
                    <div>
                      <span className="fs-3">{productQuantity} </span>
                      in the cart
                    </div>
                    <Button onClick={() => cart.addOneToCart(product.id)}>
                      +
                    </Button>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => cart.deleteFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </div>
              </> */}
            {/* ) : ( */}
            <Button className="w-100" onClick={handleShow}>
              Add To Cart
            </Button>
            <Modal sm="lg" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                {/* <h1>{product.title}</h1> */}
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{ width: "29vw" }}
                    />
                  </div>
                  <div className="col-lg-6 ">
                    <div>
                      <h1>{product.title}</h1>
                      <h4>Description:</h4>

                      <ul>
                        <li>{product.description1}</li>
                        <li>{product.description2}</li>
                      </ul>
                      <h4>Care:</h4>
                      <ul>
                        <li>{product.care}</li>
                      </ul>
                    </div>

                    {productQuantity > 0 ? (
                      <>
                        <div
                          className="d-flex align-items-center flex-column"
                          style={{ gap: ".5rem" }}
                        >
                          <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ gap: ".5rem" }}
                          >
                            <Button
                              variant="dark"
                              onClick={() => cart.removeOneToCart(product.id)}
                            >
                              -
                            </Button>
                            <div>
                              <span className="fs-3">{productQuantity} </span>
                              in the cart
                            </div>
                            <Button
                              variant="dark"
                              onClick={() => cart.addOneToCart(product.id)}
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => cart.deleteFromCart(product.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </>
                    ) : (
                      <Button
                        className="w-100"
                        onClick={() => cart.addOneToCart(product.id)}
                        variant="dark"
                      >
                        Add To Cart
                      </Button>
                    )}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            {/* )} */}

            {/*working 100%  */}
            {/* <div className="mt-auto">
            {productQuantity > 0 ? (
              <>
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <Button onClick={() => cart.removeOneToCart(product.id)}>
                      -
                    </Button>
                    <div>
                      <span className="fs-3">{productQuantity} </span>
                      in the cart
                    </div>
                    <Button onClick={() => cart.addOneToCart(product.id)}>
                      +
                    </Button>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => cart.deleteFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </div>
              </>
            ) : (
              <Button
                className="w-100"
                onClick={() => cart.addOneToCart(product.id)}
              >
                Add To Cart
              </Button>
            )} */}
            {/* {productQuantity > 0 ? (
              <>
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <Button>-</Button>
                    <div>
                      <span className="fs-3">3 </span>
                      in the cart
                    </div>
                    <Button>+</Button>
                  </div>
                  <Button variant="danger" size="sm">
                    Remove
                  </Button>
                </div>
              </>
            ) : (
              <Button className="w-100">Add To Cart</Button>
            )}
          */}
          </div>
        </Card.Body>
        {/* <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body> */}
      </Card>
    </>
  );
}

export default ProductCard;
