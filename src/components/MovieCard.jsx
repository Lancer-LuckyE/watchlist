import React from 'react';
import {MovieControls} from "./MovieControls";

export const MovieCard = ({movie, inList}) => {
    return (
      <div className={"movie-card"}>
        <div className={"overlay"}></div>
          {
            movie.poster_path ?
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}/> :
              <div className={"filler-poster"}></div>
          }
          <MovieControls movie={movie} inList={inList}/>
      </div>
    );
};
