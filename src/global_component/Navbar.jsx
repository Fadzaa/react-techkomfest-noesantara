import { useEffect, useState } from 'react';
import { logo, menuMobile } from '../utils/images';

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

   return width < breakpoint ? <NavbarMobile /> : <NavbarDesktop />
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
          }`}
      >
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
  )
}

function NavbarMobile() {
  return (
    <div className="w-screen flex justify-between absolute z-10 px-7 pt-4">
      <img src={logo} alt="Logo Neosantara" />
      <img src={menuMobile} alt="Logo Neosantara" />
    </div>
  );
}


