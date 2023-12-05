import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActiveLink = (linkName) => {
    setActiveLink(linkName === activeLink ? null : linkName);
  };

  const navItems = [
    { name: 'Wonderful Indonesia', href: '/wonderfulindonesia' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Informative Page', href: '/informativepage' },
    { name: 'About', href: '/about' },
  ];

  return (
    <div className="font-urbanist text-xl ">
      <nav className="flex list-none gap-7 justify-center mt-9">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`relative group text-black transition-all duration-300 overflow-hidden`}
              onMouseEnter={() => handleSetActiveLink(item.name)}
            >
              {item.name}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-black transition-all transform origin-left scale-x-0 ${
                  activeLink === item.name ? 'scale-x-100' : ''
                }`}
              ></span>
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
