import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className=" absolute w-full top-2">
      <ul className="flex justify-center container gap-6 rounded-full py-2 mx-auto bg-block text-white text-sm">
        <li className="hover:text-pruple transition-colors">
          <NavLink
            className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition after:w-0"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-pruple transition-colors">
          <NavLink
            className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition after:w-0"
            to="/works"
          >
            Works
          </NavLink>
        </li>
        <li className="hover:text-pruple transition-colors">
          <NavLink
            className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition after:w-0"
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
        <li className="hover:text-pruple transition-colors">
          <NavLink
            className="after:content-[''] after:block after:h-0.5 after:bg-pruple transition after:w-0"
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
