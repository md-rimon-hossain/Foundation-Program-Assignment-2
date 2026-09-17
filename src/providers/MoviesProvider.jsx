/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { getAllMovies, getMoviesBySearch } from "../services/movieServices";

export const MovieContext = createContext(null);

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const searchMovies = async (searchQuery) => {
    try {
      setLoading(true);
      if(!searchQuery){
        setSearchedMovies(null);
        return;
      }

      const resMovies = await getMoviesBySearch(searchQuery);
       if(resMovies.length === 0){
        setSearchedMovies([]);
        return;
       }
      setSearchedMovies(resMovies);
    } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      console.log(err);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllMovies();
        setMovies(data);
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        error,
        errorMessage,
        searchedMovies,
        searchMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MoviesProvider;
