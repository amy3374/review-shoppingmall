import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log("id", id);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row className="detail-row">
        <Col lg={5} className="detail-img">
          <img width={300} src={product?.img} />
        </Col>
        <Col lg={6} className="detail-info">
          <h4>{product?.title}</h4>
          <h4>{product?.price}원</h4>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="detail-btn">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
