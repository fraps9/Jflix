import React from "react";
import Movie from "../components/NowPlayingMovie";
import nowPlayingMovieData from "../nowPlayingMovieData";

function Movies() {
  return (
    <div>
      <div className="movies_container">
        {nowPlayingMovieData.results.map((item) => {
          return (
            <Movie
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

export default Movies;
