import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";
import Login from "../page/Login";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const authenticate = useSelector((state) => state.login.authenticate);
  return (
    <div>
      {authenticate == true ? (
        <ProductDetail />
      ) : (
        <Navigate to="/login">
          <Login />
        </Navigate>
      )}
    </div>
  );
};

export default PrivateRouter;
