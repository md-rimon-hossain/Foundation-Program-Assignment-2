import { NavLink } from "react-router";
import { logo } from "../assets";
function Header() {
  return (
    <>
      <header className="w-full backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-2 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="md:p-2 ">
              <NavLink to="/">
                <img src={logo} alt="logo" className="h-10 md:h-20" />
              </NavLink>
            </div>
          </div>
          <nav className="flex gap-8">
            <NavLink
              to="/movies-list"
              className={({ isActive }) =>
                `px-10 py-2 text-lg font-bold text-white transition-all duration-300 bg-[#E50914] rounded-full hover:bg-[#E50914]/80 hover:scale-105${isActive ? "text-white bg-[#E50914]/80" : "text-[#838080] hover:text-white"}`
              }
            >
              MOVIES
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
