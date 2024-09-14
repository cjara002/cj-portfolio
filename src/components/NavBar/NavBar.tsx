import { useEffect, useState } from "react";
import NavButton from "../Button/NavButton";
import urls from "../../helper/Urls";
import { Link } from "react-router-dom";
import SocialMediaButton from "../Button/SocialMediaButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 transition-all duration-300 w-full h-16 ${
        scrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4">
          <div className="flex h-8 w-32">
            <SocialMediaButton
              href={urls.github}
              iconClass="fab fa-github"
              hoverWithColor={"hover:bg-black"}
            />
            <SocialMediaButton
              href={urls.linkedin}
              iconClass="fab fa-linkedin"
              hoverWithColor={"hover:bg-[#0a66c2]"}
            />
          </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
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
