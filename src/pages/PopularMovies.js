import React from "react";
import PopularMovie from "../components/PopularMovie";
import popularMovieData from "../popularMovieData";

function PopularMovies() {
  return (
    <div>
      <div className="movies_container">
        {popularMovieData.results.map((item) => {
          return (
            <PopularMovie
              key={item.id}
              title={item.title}
              poster={item.poster_path}
              voteAverage={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PopularMovies;
