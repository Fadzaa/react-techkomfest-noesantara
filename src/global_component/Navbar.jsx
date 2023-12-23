import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { logo, menuMobile } from '../utils/icon.js';

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <NavbarMobile /> : <NavbarDesktop />;
}

function NavbarDesktop() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActiveLink = (linkName) => {
    setActiveLink(linkName === activeLink ? null : linkName);
  };

  const navItems = [
    { name: "Wonderful Indonesia", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Informative Page", href: "/informative" },
    { name: "About", href: "/about" },
    { name: "Quiz", href: "/menu" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 700;
      const isScrolled = window.scrollY > scrollThreshold;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (   
    <div
      className={`font-urbanist text-xl fixed z-10 w-screen flex justify-center  ${
        scrolled ? "bg-white text-black shadow-md" : ""
        }`}>
    
      <div className="my-5 ">
        <nav className="flex list-none gap-7 justify-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`relative group transition-all duration-300 overflow-hidden ${
                  scrolled ? "text-black" : "text-white"
                }`}
                onMouseEnter={() => handleSetActiveLink(item.name)}
              >
                {item.name}
                <div>
                  <div className="h-1"></div>
                  <div
                    className={`absolute inset-x-0 bottom-0 h-0.5 transition-all transform origin-left scale-x-0 ${
                      activeLink === item.name ? "scale-x-100" : ""
                    }`}
                    style={{
                      backgroundColor: scrolled ? "black" : "white",
                    }}
                  ></div>
                </div>
              </a>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
}

function NavbarMobile() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const scrollThreshold = 50;
    const scrolled = window.scrollY > scrollThreshold;
    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Wonderful Indonesia", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Informative Page", href: "/informative" },
    { name: "About", href: "/about" },
    { name:"Quiz", href:"/menu" },
  ];

  return (
    <div className={`w-screen flex justify-between fixed z-10 px-5 py-4 ${isScrolled ? 'bg-white' : ''}`}>
      <img src={logo} alt="Logo Neosantara" style={{ filter: isScrolled ? 'invert(100%)' : 'none' }} />
      <button
        onClick={toggleMobileMenu}
        className="cursor-pointer"
      >
        <FontAwesomeIcon
          icon={isMobileMenuOpen ? faTimes : faBars}
          style={{ color: isScrolled ? 'black' : 'white', fontSize: '30px' }}
        />
      </button>
      {isMobileMenuOpen && (
        <div className={`fixed top-0 left-0 w-screen h-screen bg-white`}>
          <button onClick={toggleMobileMenu} className="absolute top-4 right-9">
            <FontAwesomeIcon icon={faTimes} style={{ color: isScrolled ? 'black' : 'black', fontSize: '30px' }} />
          </button>
          <div className="flex flex-col items-center mt-16">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className={`text-xl my-2 text-black`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


