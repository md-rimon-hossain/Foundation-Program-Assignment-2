
import { logo } from "../assets";

function Footer() {
  return (
    <footer className="w-full bg-[#141414] border-t border-[#262626] py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="greatMovies Logo" 
            className="h-10 md:h-14 opacity-90 hover:opacity-100" 
          />
        </div>
        
        <div className="text-[#A3A3A3] text-sm md:text-base font-medium text-center">
          <p>&copy; 2026 greatMovies. All rights reserved.</p>
        </div>
        
        {/* GitHub Link */}
        <div className="flex items-center">
          <a 
            href="https://github.com/md-rimon-hossain" 
            target="_blank" 
            rel=""
            className="text-[#A3A3A3] hover:text-[#E50914] p-2 hover:bg-[#262626] rounded-full"
            aria-label="GitHub Profile"
          >
            Github
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;