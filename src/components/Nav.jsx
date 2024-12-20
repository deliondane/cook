import React, { useContext } from "react";
import { DataContext } from "../App";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { data, loading } = useContext(DataContext);

  if (loading) {
    return <h1 className="loading">데이터 로딩 중입니다.</h1>;
  }

  const categories = [...new Set(data.map((item) => item.RCP_PAT2))];

  const activeStyle = {
    color: "#f00",
    textShadow: "2px 2px 5px #ccc",
  };
  return (
    <div className="nav">
      <div className="inner">
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              전체
            </NavLink>
          </li>
          {categories.map((category) => (
            <li key={category.RCP_SEQ}>
              <NavLink
                to={`category/${category}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
