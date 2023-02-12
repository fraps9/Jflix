import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="nf_container">
      <div>해당 페이지를 찾지 못하였습니다.</div>
      <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
      <div onClick={() => navigate("/")}>메인 페이지로 이동</div>
    </div>
  );
}

export default NotFound;
