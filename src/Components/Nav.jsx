import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../Constants";
import { useWindowScroll } from "react-use";
import { gsap } from "gsap";

const Nav = () => {
  const navRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const appear = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  // const { y: currentScrollY } = useWindowScroll();
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setCurrentScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [lastScrollY, setLastScrollY] = useState(0);

  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navRef.current.classList.remove("borderBottom");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navRef.current.classList.add("borderBottom");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div className="flex justify-center items-center">
      <nav ref={navRef}>
        <div className="hidden">
          <div className="absolute top-5 max-md:top-3 max-md:left-3 left-10 flex justify-between px-4">
            <button className="mutedButton">Dark</button>
          </div>
          <div className="absolute top-5 max-md:top-3 max-md:right-3 right-10 flex justify-between px-4">
            <button className="mutedButton">Sign In</button>
          </div>
        </div>

        <div className="group pt-1">
          <div className=" flex justify-center items-center md:py-2">
            <a href="#" className=" text-2xl font-bold logo " onClick={appear}>
              RXVIN
            </a>
          </div>
          <ul
            className={`flex justify-evenly md:pb-2 max-md:mt-4 md:justify-center items-center md:gap-20 lg:mt-1 md:group-hover:opacity-100 transition-all duration-250 ease-out md:${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a href={`#${nav.id}`} onClick={appear}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
