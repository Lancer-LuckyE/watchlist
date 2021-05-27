import React, {useEffect, useReducer, createContext} from "react";
import {AppReducer} from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')):[],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')):[]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // actions

  const addMovieToWatchlist = movie => {
    dispatch({type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie});
  }
  const removeMovieFromWatchlist = movieId => {
    dispatch({type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: movieId})
  };
  const addMovieToWatched = movie => {
    dispatch({type: 'ADD_MOVIE_TO_WATCHED', payload: movie});
  };
  const removeMovieFromWatched = movieId => {
    dispatch({type: 'REMOVE_MOVIE_FROM_WATCHED', payload: movieId})
  };
  // const accessible = {
  //   states: {
  //     watchlist: state.watchlist,
  //     watched: state.watched,
  //   },
  //   actions: {
  //     addMovieToWatchlist,
  //   }
  // }

  const watchlist = {
    watchlist: state.watchlist,
    actions: {
      addMovieToWatchlist,
      removeMovieFromWatchlist,
    }
  }

  const watched = {
    watched: state.watched,
    actions: {
      addMovieToWatched,
      removeMovieFromWatched,
    }
  }

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state.watchlist, state.watched]);


  return (
    <GlobalContext.Provider value={{watchlist, watched}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
