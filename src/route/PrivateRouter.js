import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";
import Login from "../page/Login";

const PrivateRouter = ({ authenticate }) => {
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
