import React, {useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";
import {MovieCard} from "./MovieCard";

export const WatchList = () => {
  const {watchlist, actions} = useContext(GlobalContext).watchlist;

  return (
    <div className={"movie-page"}>
      <div className={"container"}>
        <div className={"header"}>
          <h1 className={"heading"}>My Watchlist</h1>
        </div>
        {
          watchlist.length > 0 ?
            <div className="movie-grid">
              {watchlist.map((movie, index) => (<MovieCard movie={movie} inList={'watchlist'} key={index}/>))}
            </div> :
            <h2 className="no-movies">
              No Movies in your list, go add some!
            </h2>
        }
      </div>
    </div>
  );
};
