import { X, Star, Calendar, Clapperboard, Globe } from "lucide-react";

function MovieDetailsModal({ selectedMovie, handleCloseModal }) {
  const imageUrlOriginal =
    selectedMovie?.image?.original
  const imageUrlMedium = selectedMovie?.image?.medium;

  const title = selectedMovie?.name || "No Title available";
  const releaseYear = selectedMovie?.premiered
    ? selectedMovie.premiered.split("-")[0]
    : "N/A";
  const rating = selectedMovie?.rating?.average || "0.0";
  const genres = selectedMovie?.genres?.join(", ") || "No Genre available";
  const language = selectedMovie?.language || "Unknown";

  const summaryHTML =
    selectedMovie?.summary || "<p>No description available.</p>";

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:max-w-6xl bg-[#1c1c1c] rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col max-h-[90vh]"
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-[#E50914] text-white p-2 rounded-full backdrop-blur-md transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full h-64 sm:h-80 md:h-96 shrink-0">
          {
            imageUrlOriginal ? (
              <img
            src={imageUrlOriginal}
            alt={title}
            className="w-full h-full object-cover object-top-left"
          />
            ) : (
              <div className="text-white text-center mt-20 font-bold text-2xl">No Image Available</div>
            )
          }{
            imageUrlMedium ? (
              <img
            src={imageUrlMedium}
            alt={title}
            className="hidden md:block absolute top-20 right-10  h-full object-contain z-20 rounded-4xl "
          />
            ) : (
              <div className="hidden  md:block absolute top-20 right-10  h-full object-contain z-20 rounded-4xl  text-white text-center mt-20 font-bold text-2xl">No Image Available</div>
            )
          }

          <div className="absolute inset-0 bg-linear-to-t from-[#1c1c1c] via-[#1c1c1c]/40 to-transparent"></div>
        </div>

        <div className="relative p-6 sm:p-8 -mt-20 sm:-mt-24 z-10 grow overflow-y-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 drop-shadow-lg leading-tight">
            {title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-300 font-medium mb-8">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-bold">{rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#E50914]" />
              <span>{releaseYear}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clapperboard className="w-4 h-4 text-[#E50914]" />
              <span>{genres}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#E50914]" />
              <span>{language}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
            <div
              className="text-gray-300 leading-relaxed text-sm sm:text-base prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: summaryHTML }}
            />
          </div>

          {/* Bottom Close Button */}
          <div className="flex justify-end pt-4 border-t border-white/10 mt-auto">
            <button
              onClick={handleCloseModal}
              className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-[#E50914] text-white rounded-xl font-semibold transition-colors duration-300"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;
