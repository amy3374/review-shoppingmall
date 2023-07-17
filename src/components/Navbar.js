import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const authenticate = useSelector((state) => state.login.authenticate);
  const dispatch = useDispatch();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
    dispatch({ type: "LOGOUT_SUCCESS", payload: {} });
  };
  // const logout = () => {
  //   setAuthenticate(false);
  // };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="login-bar">
        <div className="login-area" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate === true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="logo-bar">
        <img
          onClick={goToHome}
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"
        />
      </div>
      <div className="menu-bar">
        <ul className="menu-area">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} onClick={search} />
          <input type="text" onKeyDown={(e) => search(e)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
