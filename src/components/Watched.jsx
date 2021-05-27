import React, {useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";
import {MovieCard} from "./MovieCard";

export const Watched = () => {
  const {watched, actions} = useContext(GlobalContext).watched;

  return (
    <div className={"movie-page"}>
      <div className={"container"}>
        <div className={"header"}>
          <h1 className={"heading"}>My Watchlist</h1>
        </div>
        {
          watched.length > 0 ?
            <div className="movie-grid">
              {watched.map((movie, index) => (<MovieCard movie={movie} inList={'watched'} key={index}/>))}
            </div> :
            <h2 className="no-movies">
              You haven't been watched any movies yet! Take a rest and watch some movies!
            </h2>
        }
      </div>
    </div>
  );
};
