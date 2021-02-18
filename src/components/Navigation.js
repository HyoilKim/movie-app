import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
      <div className="nav">
        <Link to="/"> Home </Link>
        <Link to="/about"> About</Link>
        {/* props로 데이터를 전달하는 방법
            <Link to={{
            pathname:"/about",
            state: {
                fromNavigation: true;
            }
        }}/> */}
      </div>
    )
}

export default Navigation;