import { use, useState } from "react";
import { MovieContext } from "../providers/MoviesProvider";
import ShowMovieCard from "../components/ShowMovieCard";
import { Search } from "lucide-react";
import MovieDetailsModal from "../components/MovieDetailsModal";

function MoviesList() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const { movies, searchedMovies, searchMovies, loading, error, errorMessage } =
    use(MovieContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchQuery);
  };

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedMovie(null);
  };

  if (loading) {
    return (
      <div className="text-center text-white mt-20 text-2xl font-bold">
        Loading amazing movies...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-20 text-xl font-bold">
        Error: {errorMessage}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-6 ">
        <div className="flex flex-col-reverse md:flex-row gap-2 justify-between">
          {movies && !searchedMovies && (
            <h2 className="text-base md:text-3xl font-bold text-white mb-8 border-l-4 border-[#E50914] pl-4">
              {" "}
              All Movies ({movies?.length || 0})
            </h2>
          )}

          {searchedMovies && searchedMovies?.length >= 0 && (
            <h2 className="text-base md:text-3xl font-bold text-white mb-8 border-l-4 border-[#E50914] pl-4">
              {" "}
              Search Results ({searchedMovies?.length || 0})
            </h2>
          )}

          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              className="border border-white/10 bg-white/5 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#E50914]"
              type="text"
              name=""
              id=""
              placeholder="🔍 Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="border border-white/10 bg-white/5 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#E50914]"
              type="submit"
              onClick={handleSearch}
            >
              <Search />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
          {searchedMovies &&
            searchedMovies?.length >= 0 &&
            searchedMovies?.map((movie) => (
              <ShowMovieCard key={movie?.show?.id} movie={movie?.show} />
            ))}

          {searchedMovies && searchedMovies?.length === 0 && (
            <div className="text-center text-white mt-20 text-2xl font-bold">
              No movies found
            </div>
          )}

          {movies &&
            !searchedMovies &&
            movies?.map((movie) => (
              <ShowMovieCard
                key={movie?.id}
                movie={movie}
                handleOpenModal={handleOpenModal}
              />
            ))}
        </div>
      </div>

      {isOpenModal && selectedMovie && (
        <MovieDetailsModal
          selectedMovie={selectedMovie}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default MoviesList;
