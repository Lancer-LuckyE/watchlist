import React, {useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState";


export const ResultCard = ({movie}) => {
  const {watchlist, actions} = useContext(GlobalContext).watchlist;

  return (
    <div className={"result-card"}>
      <div className={"poster-wrapper"}>
        {
          movie.poster_path ?
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} poster`}/> :
            <div className={"filler-poster"}></div>
        }
      </div>

      <div className={"info"}>
        <div className={"header"}>
          <h3 className={"title"}>{movie.title}</h3>
          <h4 className={"release-date"}>
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className={"controls"}>
          <button className={"btn"}
                  disabled={watchlist.find( (element) => element.id === movie.id ) ? true : false}
                  onClick={() => actions.addMovieToWatchlist(movie)}>
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};
