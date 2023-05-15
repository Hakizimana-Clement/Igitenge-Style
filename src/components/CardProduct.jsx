import { Button, Stack } from "react-bootstrap";
import { CartContext } from "../context/CardContext";
import { useContext } from "react";
import { getProductData } from "./IbitengeImageStore";

function CardProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={productData.img}
          style={{ width: "125px", height: "140px", objectFit: "cover" }}
          alt={productData.title}
        />

        <div className="me-auto">
          <div>
            {productData.title}{" "}
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            ${productData.price}
          </div>
        </div>
        <div>$ {(quantity * productData.price).toFixed(2)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => cart.deleteFromCart(id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
}

export default CardProduct;
