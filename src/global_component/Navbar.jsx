import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {crossPrimary, leftBottomDecorMobile, logo, menuMobile, rightBottomDecorMobile} from '../utils/icon.js';
import {useTranslation} from "react-i18next";

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 815;



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
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const handleSetActiveLink = (linkName) => {
    setActiveLink(linkName === activeLink ? null : linkName);
  };

  const navItems = [
    { name: "Wonderful Indonesia", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Informative Page", href: "/informative" },
    { name: "About", href: "/about" },
    { name: "Quiz", href: "/quiz" },
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
      className={`font-urbanist text-xl fixed z-10 w-screen flex justify-between items-center h-[72px] px-10 ${
        scrolled ? "bg-white text-black shadow-md" : ""
        }`}>

      <h1 className={`font-milonga text-[48px] ${scrolled ? "text-primaryText" : "text-white"} `}>N</h1>
      <div className=" ms-8">
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
      <div className={`flex items-center gap-4  font-urbanist text-lg  ${scrolled ? "text-primaryText" : "text-white"} `}>
        <div>
          <h3 className={`cursor-pointer ${currentLanguage === 'en' ? 'font-bold' : ''}`}
              onClick={() => changeLanguage('en')}>EN</h3>
          {currentLanguage === 'en' && (
              <div className="w-full h-[1px] bg-white"></div>
          )}
        </div>

        <h3>|</h3>

        <div>
          <h3 className={`cursor-pointer ${currentLanguage === 'id' ? 'font-bold' : ''}`}
              onClick={() => changeLanguage('id')}>ID</h3>
          {currentLanguage === 'id' && (
              <div className={`w-full h-[1px] ${scrolled ? 'bg-black' : "bg-white"}`}></div>
          )}
        </div>
      </div>
    </div>
  );
}

function NavbarMobile() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

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
    { name:"Quiz", href:"/quiz" },
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
        <div className="fixed top-0 left-0 w-screen h-screen bg-white">
          <img className="absolute bottom-0 left-0" src={leftBottomDecorMobile} alt="Left Bottom Decor Mobile"/>
          <img className="absolute bottom-0 right-0" src={rightBottomDecorMobile} alt="Left Bottom Decor Mobile"/>

          <div className="flex flex-col h-full w-full px-5 pt-4 relative justify-between">
            <div className="flex w-full justify-between">
              <div className="flex gap-7">
                <h1 className="font-milonga text-primary text-[36px]">N</h1>
                <div className={`flex items-center gap-4  font-urbanist text-base text-primary  `}>
                  <div>
                    <h3 className={`cursor-pointer ${currentLanguage === 'en' ? 'font-bold' : ''}`}
                        onClick={() => changeLanguage('en')}>EN</h3>
                    {currentLanguage === 'en' && (
                        <div className="w-full h-[1px] bg-primary"></div>
                    )}
                  </div>

                  <h3>|</h3>

                  <div>
                    <h3 className={`cursor-pointer ${currentLanguage === 'id' ? 'font-bold' : ''}`}
                        onClick={() => changeLanguage('id')}>ID</h3>
                    {currentLanguage === 'id' && (
                        <div className={`w-full h-[1px] bg-primary`}></div>
                    )}
                  </div>
                </div>
              </div>


              <button onClick={toggleMobileMenu} className="">
                <img src={crossPrimary} alt="Cross Primary"/>
              </button>

            </div>
            <div className="flex flex-col items-center gap-8 pb-8">
              {navItems.map((item, index) => (
                  <a key={index} href={item.href} className={`font-urbanist text-lg text-primary font-light`}>
                    {item.name}
                  </a>
              ))}
            </div>
            <div></div>
          </div>


        </div>
      )}
    </div>
  );
}


