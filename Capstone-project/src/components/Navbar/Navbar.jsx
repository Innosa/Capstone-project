import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo3.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const DropdownLinks = [
  { name: "Our Services", link: "/#services" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/#location" }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navRef.current?.classList?.add("sticky t-0 l-0 z-50");
      } else {
        navRef.current?.classList?.remove("sticky t-0 l-0 z-50");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div ref={navRef} className="w-full bg-white text-black shadow-md">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex justify-between py-[2px]">
            <p>20% off on next booking</p>
            <p>Mobile number +234 23456789</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm: py-0">
        <div className="flex justify-between item-center ">
          <div className="flex items-center gap-4  font-bold text-2xl">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logoImg} alt="" className="h-16" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  activeClassName="active"
                  to="/blogs"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  activeClassName="active"
                  to="/places"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Best Places
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  activeClassName="active"
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </NavLink>
              </li>
              {/* Dropdown section */}
              <li className="py-4 relative group cursor-pointer">
                <div className="dropdown group flex items-center">
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute -left-9 z-[9999] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 shadow-md text-black w-[150px] bg-white p-2 transition-all duration-300">
                  <ul>
                    {DropdownLinks.map((data) => {
                      return (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                            onClick={() => setShowMenu(false)}
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-gradient-to-r from-primary to-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
              onClick={() => {
                // handleOrderPopup();
              }}
            >
              Book Now
            </button>
            {/* Mobile Hanburger Menu */}
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
