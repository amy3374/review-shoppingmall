import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const selectedItem = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id", id);
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row className="detail-row">
        <Col lg={5} className="detail-img">
          <img width={300} src={selectedItem?.img} />
        </Col>
        <Col lg={6} className="detail-info">
          <h4>{selectedItem?.title}</h4>
          <h4>{selectedItem?.price}원</h4>
          <div>{selectedItem?.choice == true ? "Conscious choice" : ""}</div>
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
