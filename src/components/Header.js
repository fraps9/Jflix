import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_container">
      <div className="header_wrap">
        <div className="header_left">
          <Link to="/">
            <h1>Jflix</h1>
          </Link>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ul>
              <li>
                <Link className="header_nav_item" to="/nowplayingmovie">
                  현재 상영중인 영화
                </Link>
              </li>
              <li>
                <Link className="header_nav_item" to="popularmovie">
                  인기있는 영화
                </Link>
              </li>
              <li>
                <Link className="header_nav_item" to="TvProgram">
                  TV 프로그램
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
