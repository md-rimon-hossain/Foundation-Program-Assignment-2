import { use, useState } from "react";
import { MovieContext } from "../providers/MoviesProvider";
import ShowMovieCard from "../components/ShowMovieCard";
import { Search } from "lucide-react";

function MoviesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies, searchedMovies, searchMovies, loading, error, errorMessage } =
    use(MovieContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchQuery);
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
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-6 ">
      <div className="flex justify-between">
        <h2 className="text-base md:text-3xl font-bold text-white mb-8 border-l-4 border-[#E50914] pl-4">
          All Movies
        </h2>
        <form
          onSubmit={handleSearch}
          className="flex flex-1  items-center gap-2"
        >
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
        <div className=""></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
        {searchedMovies && searchedMovies?.length >= 0 &&
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
            <ShowMovieCard key={movie?.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default MoviesList;
