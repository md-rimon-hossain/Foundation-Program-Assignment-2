import { Link } from "react-router";
import { heroImage } from "../assets";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Movies Background"
          className="w-full h-full object-cover opacity-80"
        />
  
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase drop-shadow-2xl leading-none">
          Discover <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-400">
            Movies
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl font-medium drop-shadow-lg leading-relaxed">
          Explore and discover your favorite movies from around the world.
        </p>

        <Link
          to="/movies-list"
          className="flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-[#E50914] rounded-full hover:bg-[#E50914]/80 hover:scale-105"
        >
          Explore All Movies
          <ArrowRight className="w-6 h-6 ml-3" />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
