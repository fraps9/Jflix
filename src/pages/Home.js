import React from "react";
import HomeList from "../components/HomeList";
import movieData from "../nowPlayingMovieData";
import poPularMovieData from "../popularMovieData";
import tvProgramData from "../tvProgramData";

function Home() {
  return (
    <div className="page_container">
      <h2>현재 상영중인 영화</h2>
      <div className="home_movies_container">
        {movieData.results.map((item) => {
          return (
            <HomeList
              key={item.id}
              title={item.title}
              poster={item.poster_path}
              voteAverage={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
      <div>
        <h2>인기있는 영화</h2>
        <div className="home_movies_container">
        {poPularMovieData.results.map((item) => {
          return (
            <HomeList
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
      <div>
        <h2>TV 프로그램</h2>
        <div className="home_movies_container">
        {tvProgramData.results.map((item) => {
          return (
            <HomeList
              key={item.id}
              title={item.name}
              poster={item.poster_path}
              voteAverage={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default Home;
