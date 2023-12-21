import { useState, useEffect } from 'react';
import { arrowRight } from '../../../utils/icon';

const Sidebar = () => {
  const [open, setOpen] = useState(window.innerWidth >= 1040); // Initially open on desktop

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 1020);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Menus = [
    { title: 'About', id: 'about' },
    { title: 'History', id: 'history' },
    { title: 'Geography', id: 'geography' },
    { title: 'Demographics', id: 'demographics' },
    { title: 'Art And Culture', id: 'art-culture' },
  ];

  const Search = [
    { title: 'Jawa Tengah', id: 'jawa-tengah' },
    { title: 'Jawa Timur', id: 'jawa-timur' },
    { title: 'Jawa Barat', id: 'jawa-barat' },
    { title: 'Maluku', id: 'maluku' },
    { title: 'Sulawesi Utara', id: 'sulawesi-utara' },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? 'w-60' : 'w-7 '} bg-GreenWhite h-screen lg: p-5 pt-8 fixed duration-300 overflow-y-auto flex flex-col justify-center`}
      >
        <img
          src={arrowRight}
          className={`absolute cursor-pointer right-0 w-7 ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center  ">
          <div className={` ${open ? 'w-30' : 'w-3 '} bg-GreenWhite fixed pt-8 mt-20 `}>
            <h1 className={`text-black origin-left font-bold font-milonga text-3xl duration-200 ${!open && 'scale-0'} `}>
              Neosantara
            </h1>
          </div>
        </div>
        <ul className="mt-24">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}
            >
              <a href={`#${Menu.id}`} className={`${!open && 'hidden'} origin-left duration-200 font-urbanist text-base`}>
                {Menu.title}
              </a>
            </li>
          ))}
        </ul>
        <div className={`flex items-center mt-10 ${open ? 'block' : 'hidden'}`}>
          <input
            type="text"
            placeholder="Search"
            pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
            className="w-[170px] h-10 px-3 mt-3 border border-white rounded-lg focus:outline-none placeholder-black"
          />
        </div>
        <ul>
          {Search.map((Search, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
              ${Search.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}
            >
              <a href={`#${Search.id}`} className={`${!open && 'hidden'} origin-left duration-200 font-urbanist text-base`}>
                {Search.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
