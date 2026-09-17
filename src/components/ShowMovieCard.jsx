import { Star, Calendar, Info } from "lucide-react";

function ShowMovieCard({ movie }) {
  const imageUrl =
    movie?.image?.medium;
  const title = movie?.name;
  const releaseYear = movie?.premiered ? movie.premiered : "N/A";
  const rating = movie?.rating?.average || "0.0";

  return (
    <div className="group relative flex flex-col bg-[#262626] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(229,9,20,0.4)] border border-white/5">
      <div className="relative aspect-2/3 overflow-hidden">
        <img
          src={imageUrl}
          alt={title || "No image"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="relative flex flex-col grow p-5 -mt-10 z-10">
        <h3
          className="text-xl font-bold text-white mb-2 line-clamp-1 drop-shadow-md"
          title={title }
        >
          {title}
        </h3>

        <div className="flex items-center justify-between gap-2 text-[#A3A3A3] text-sm mb-6 font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#A3A3A3]" />
          <span>{releaseYear}</span>
          </div>
          <div className="top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/10 shadow-xl">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-bold text-sm">{rating}</span>
          </div>
        </div>

        <div className="mt-auto">
          <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-[#E50914] text-white py-2.5 rounded-xl font-semibold transition-all duration-300 border border-white/10 hover:border-transparent hover:shadow-[0_0_20px_-5px_rgba(229,9,20,0.6)]">
            <Info className="w-5 h-5" />
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowMovieCard;
