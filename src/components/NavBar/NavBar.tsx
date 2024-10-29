import { useEffect, useState } from "react";
import NavButton from "../Button/NavButton";
import urls from "../../helper/Urls";
import SocialMediaButton from "../Button/SocialMediaButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Handle scroll for navbar background
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

  
    const sections = document.querySelectorAll("div[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-50px 0px 0px 0px",
      threshold: 0.6, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    setActiveSection("home");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 transition-all duration-300 h-16 text-white overflow-x-hidden ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center h-full px-4 overflow-x-hidden">
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
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div
          className={`z-20 lg:flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-2 lg:space-y-0 ${isOpen ? "block" : "hidden"} lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 items-center">
            <li>
              <NavButton
                href="#home"
                textSize="text-lg sm:text-sm text-white"
                text="Home"
                iconClass="fa-1x mr-2 fas fa-home"
                isActive={activeSection === "home"}
              />
            </li>
            <li>
              <NavButton
                href="#about-me"
                textSize="text-lg sm:text-sm text-white"
                text="About Me"
                iconClass="fa-1x mr-2 fas fa-laptop"
                isActive={activeSection === "about-me"}
              />
            </li>
            <li>
              <NavButton
                href="#skills"
                textSize="text-lg sm:text-sm text-white"
                text="Skills"
                iconClass="fa-1x mr-2 fas fa-gear"
                isActive={activeSection === "skills"}
              />
            </li>
            <li>
              <NavButton
                href="#projects"
                textSize="text-lg sm:text-sm text-white"
                text="Web/Mobile App"
                title="Web/Mobile App"
                iconClass="fa-1x mr-2 fas fa-briefcase"
                isActive={activeSection === "projects"}
              />
            </li>
            <li>
              <NavButton
                href="#contact-me"
                textSize="text-lg sm:text-sm text-white"
                text="Let's Connect"
                title="Let's Connect"
                iconClass="fa-1x mr-2 fas fa-envelope-open-text"
                isActive={activeSection === "contact-me"}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
