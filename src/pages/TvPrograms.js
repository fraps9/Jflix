import React from "react";
import TvProgram from "../components/TvProgram";
import tvProgramdata from "../tvProgramData";

function TvPrograms() {
  return (
    <div>
      <div className="TvPrograms_container">
        {tvProgramdata.results.map((item) => {
          return (
            <TvProgram
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
  );
}

export default TvPrograms;
