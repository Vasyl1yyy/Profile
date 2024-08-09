import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [top, setTop] = useState('0.5%');

  const anime = () => {
    setTop('50%');
    setTimeout(() => {
      setTop('0.5%');
    }, 1000);
  };

  return (
    <>
      <nav className=" absolute w-full top-4">
        <ul className="flex justify-center container gap-6 rounded-full py-2 mx-auto bg-block text-white text-sm">
          <li className="hover:text-pruple transition-colors">
            <NavLink
              className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition after:w-0"
              to="/"
              onClick={anime}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-pruple transition-colors">
            <NavLink
              className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition after:w-0"
              to="/works"
              onClick={anime}
            >
              Works
            </NavLink>
          </li>
          <li className="hover:text-pruple transition-colors">
            <NavLink
              className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition-all after:w-0"
              to="/resume"
              onClick={anime}
            >
              Resume
            </NavLink>
          </li>
          <li className="hover:text-pruple transition-colors">
            <NavLink
              className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition after:w-0"
              to="/contacts"
              onClick={anime}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className=" absolute bottom-0 h-1 rounded-t-lg z-20 w-screen bg-pruple"
        style={{ transition: 'all 0.5s', height: top }}
      ></div>
      <div
        className={
          ' absolute rounded-b-lg w-screen bg-pruple transition z-20 top-0'
        }
        style={{ transition: 'all 0.5s', height: top }}
      ></div>
    </>
  );
}
