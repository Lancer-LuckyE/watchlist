import React, {useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState";

export const MovieControls = ({movie, inList}) => {
  const {watchlist, actions:watchlistActions} = useContext(GlobalContext).watchlist;
  const {watched, actions:watchedActions} = useContext(GlobalContext).watched

  return (
    <div className="inner-card-controls">
      {
        inList === 'watchlist' && (
        <>
          <button className="ctrl-btn" onClick={ () => {
            watchlistActions.removeMovieFromWatchlist(movie.id);
            watchedActions.addMovieToWatched(movie);
          }}>
            <i className={"fa-fw far fa-eye"}></i>
          </button>

          <button className="ctrl-btn" onClick={() => watchlistActions.removeMovieFromWatchlist(movie.id)}>
            <i className={"fa-fw fa fa-times"}></i>
          </button>
        </>
      )}
      {
        inList === 'watched' && (
          <>
            <button className="ctrl-btn" onClick={ () => {
              watchedActions.removeMovieFromWatched(movie.id);
              watchlistActions.addMovieToWatchlist(movie);
            }}>
              <i className={"fa-fw far fa-eye-slash"}></i>
            </button>

            <button className="ctrl-btn" onClick={() => watchedActions.removeMovieFromWatched(movie.id)}>
              <i className={"fa-fw fa fa-times"}></i>
            </button>
          </>
        )
      }
    </div>
  );
};
