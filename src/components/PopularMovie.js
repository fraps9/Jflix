import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

function PopularMovie(props) {
  const navigate = useNavigate();
  const onClickMovieItem = () => {
    navigate(`/popularmovie/${props.title}`, {
      state: props
    })
  }
  return (
    <div className="movie_container" onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + props.poster} alt="영화 포스터" />
      <div className="movie_info">
        <h4>{props.title}</h4>
        <span>{props.voteAverage}</span>
      </div>
    </div>
  );
}

export default PopularMovie;
