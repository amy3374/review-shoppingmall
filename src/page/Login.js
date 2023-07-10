import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Form onSubmit={(e) => login(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
