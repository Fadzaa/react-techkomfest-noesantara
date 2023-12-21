import { useState, useEffect } from 'react';
import { arrowRight, iconArrowDown } from '../../../utils/icon';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [{ title: 'About' }, { title: 'History' }, { title: 'Geography' }, { title: 'Demographics' }, { title: 'Art And Culture' }, { title: 'Languange' }];
  const Search =[{title: 'Jawa Tengah'},{title: 'Jawa Timur'},{title: 'Jawa Barat'},{title: 'Maluku'},{title: 'Sulawesi Utara'}]

  return (
    <div className="flex">
      <div className={` ${open ? 'w-60' : 'w-7 '} bg-GreenWhite h-screen p-5  pt-8 relative duration-300`}>
        <img
          src={arrowRight}
          className={`absolute cursor-pointer -right-3 top-96 w-7 
          ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1 className={`text-black origin-left font-bold font-milonga text-3xl duration-200 ${!open && 'scale-0'}`}>Neosantara</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}
            >
              <span className={`${!open && 'hidden'} origin-left duration-200 font-urbanist text-base`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
        <div className={`flex items-center mt-10 ${open ? 'block' : 'hidden'}`}>
          <input type="text" placeholder="Search" pattern="[a-zA-Z0-9._%+-]+@gmail\.com" className="w-[170px] h-10 px-3 mt-3 border border-white rounded-lg focus:outline-none placeholder-black" />
        </div>
        <ul>
          {Search.map((Search, index) => (
            <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
              ${Search.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}
            >
               <span className={`${!open && 'hidden'} origin-left duration-200 font-urbanist text-base`}>{Search.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
