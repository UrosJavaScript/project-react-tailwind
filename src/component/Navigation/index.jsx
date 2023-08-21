import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINK } from "../../helper";
import Icon from "react-icons-kit";
import { feed } from "react-icons-kit/fa/feed";
import { android } from "react-icons-kit/fa/android";
import { apple } from "react-icons-kit/fa/apple";
import Logo from "../../assets/images/logo.svg";
import MenuIcon from "../../assets/images/menu.svg";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      if (menuOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }, 500);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 2;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full text-white  drop-shadow-lg sticky top-0 z-[9999] shadow-lg transition-colors duration-1000  ${
          scrolled ? "bg-blackColor" : "bg-primaryColor"
        }`}
      >
        <div className="relative">
          <div className="wrapper">
            {/* Desktop devices */}
            <div className="flex items-center gap-8 py-3 max-md:hidden">
              <Link to="/">
                <img src={Logo} alt="logo" className="h-[50px]" />
                {/* <p>COMPANY</p> */}
              </Link>

              <div className="flex w-full gap-10">
                {NAV_LINK?.map((item, key) => {
                  return (
                    <Link
                      key={key}
                      className={`font-semibold transition duration-500  ${
                        scrolled
                          ? "hover:text-primaryColor"
                          : "hover:text-blackColor"
                      }`}
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Icons */}
              <div className="flex gap-4">
                <a
                  href="/"
                  className={`transition duration-300  ${
                    scrolled
                      ? "hover:text-primaryColor"
                      : "hover:text-blackColor"
                  }`}
                >
                  <Icon size={22} icon={feed} />
                </a>
                <a
                  href="/"
                  className={`transition duration-300  ${
                    scrolled
                      ? "hover:text-primaryColor"
                      : "hover:text-blackColor"
                  }`}
                >
                  <Icon size={22} icon={android} />
                </a>
                <a
                  href="/"
                  className={`transition duration-300  ${
                    scrolled
                      ? "hover:text-primaryColor"
                      : "hover:text-blackColor"
                  }`}
                >
                  <Icon size={22} icon={apple} />
                </a>
              </div>
            </div>

            {/* Mobile devices  */}
            <div className="flex items-center justify-between w-full py-3 md:hidden">
              <Link to="/">
                <img src={Logo} alt="logo" className="h-[50px]" />
              </Link>
              <button className="transition duration-300" onClick={toggleMenu}>
                <img src={MenuIcon} alt="menu" />
              </button>

              <div
                id="mobile-menu"
                className={`w-full h-screen absolute top-0 right-0 transition-transform duration-1000 ease-in-out transform bg-gradient-to-r from-primaryColor to-blackColor py-10 ${
                  menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div
                  id="close-menu"
                  className="fixed text-white -top-5 right-6"
                >
                  <button
                    className="text-right text-secondary text-[70px]"
                    onClick={toggleMenu}
                  >
                    &times;
                  </button>
                </div>
                <div className="flex flex-col items-center w-full gap-10 mt-8">
                  {NAV_LINK?.map((item, key) => {
                    return (
                      <Link
                        key={key}
                        className="text-xl font-semibold"
                        to={item.link}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  {/* Icons */}
                  <div className="flex gap-6">
                    <a href="/">
                      <Icon size={22} icon={feed} />
                    </a>

                    <a href="/">
                      <Icon size={22} icon={android} />
                    </a>

                    <a href="/">
                      <Icon size={22} icon={apple} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
