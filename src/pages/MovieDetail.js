import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/NowPlayingMovie";

function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className="page_container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px" }}
          src={IMG_BASE_URL + state.poster}
          alt="영화 포스터"
        />
        <div style={{ padding: "16px", position:"relative" }}>
          <div
            style={{
              fontSize: "32px",
              color: "#fff",
              marginBottom: "16px",
              fontWeight: "700",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: "18px", color: "#fff" }}>
            {state.overview}
          </div>
          <button className="watching_btn" type="button">
            시청하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
