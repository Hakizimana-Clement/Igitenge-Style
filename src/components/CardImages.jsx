import React from "react";
import { Row, Col } from "react-bootstrap";
import { ibitengeImageStore } from "./IbitengeImageStore";
import ProductCard from "./ProductCard";
function CardImages() {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {ibitengeImageStore.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CardImages;
