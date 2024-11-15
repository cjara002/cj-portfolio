import { useEffect, useState } from "react";
import NavButton from "../Button/NavButton";
import urls from "../../helper/Urls";
import SocialMediaButton from "../Button/SocialMediaButton";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const sections = document.querySelectorAll("div[id]");
    const observerOptions = { root: null, rootMargin: "-50px 0px 0px 0px", threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          console.log("observer:",entry.target.id)
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    setActiveSection("home");

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: "#home", text: "Home", icon: "fas fa-home" },
    { href: "#about-me", text: "About Me", icon: "fas fa-laptop" },
    { href: "#skills", text: "Skills", icon: "fas fa-gear" },
    { href: "#projects", text: "Projects", icon: "fas fa-briefcase" },
    { href: "#contact-me", text: "Contact Me", icon: "fas fa-envelope-open-text" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-20 transition-all duration-300 h-16 ${
        scrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex justify-between items-center h-full px-4">
        <div className="flex h-8 w-32">
          <SocialMediaButton
            href={urls.github}
            iconClass="fab fa-github"
            hoverWithColor="hover:bg-black"
          />
          <SocialMediaButton
            href={urls.linkedin}
            iconClass="fab fa-linkedin"
            hoverWithColor="hover:bg-[#0a66c2]"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <ul className="flex space-x-6">
            {navLinks.map(({ href, text, icon }) => (
              <NavButton
                key={href}
                href={href}
                textSize="text-lg sm:text-sm text-white"
                text={text}
                iconClass={icon}
                isActive={activeSection === href.replace("#", "")}
              />
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-black text-white shadow-md lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col px-4 py-2 space-y-2">
                {navLinks.map(({ href, text, icon }) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <NavButton
                      href={href}
                      textSize="text-lg text-white"
                      text={text}
                      iconClass={icon}
                      isActive={activeSection === href.substring(1)}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;