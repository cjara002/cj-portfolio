import { useState } from 'react';
import NavButton from "../Button/NavButton";
import urls from "../../helper/Urls";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary bg-opacity-90 w-full h-16 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <div className="flex space-x-4">
          <ul className="flex items-center space-x-4">
            <li>
              <NavButton
                href={urls.github}
                title="GitHub"
                textSize="text-lg sm:text-sm text-white"
                iconClass="fab fa-github"
              />
            </li>
            <li>
              <NavButton
                href={urls.linkedin}
                title="LinkedIn"
                textSize="text-lg sm:text-sm text-white"
                iconClass="fab fa-linkedin"
              />
            </li>
          </ul>
        </div>

        <button 
          className="text-white lg:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 items-center">
            <li>
              <Link to="/" className="text-lg sm:text-sm text-white">
                <i className="fa-1x mr-2 fas fa-home"></i>
                Home
              </Link>
            </li>
            <li>
              <NavButton
                href={urls.about}
                textSize="text-lg sm:text-sm text-white"
                text="About Me"
                iconClass="fa-1x mr-2 fas fa-laptop"
              />
            </li>
            <li>
              <NavButton
                href={urls.myProjects}
                textSize="text-lg sm:text-sm text-white"
                text="Web/Mobile App"
                title="Web/Mobile App"
                iconClass="fa-1x mr-2 fas fa-briefcase"
              />
            </li>
            <li>
              <NavButton
                href={urls.formBorder}
                textSize="text-lg sm:text-sm text-white"
                text="Let's Connect"
                title="Let's Connect"
                iconClass="fa-1x mr-2 fas fa-envelope-open-text"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;