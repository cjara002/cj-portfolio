import { useState } from "react";
import HeroBanner from "../HeroBanner/HeroBanner.tsx";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import AboutMe from "../AboutMe/AboutMe.tsx";
import TechUsed from "../TechUsed/TechUsed.tsx";
import projects from "../../helper/listOfProject.tsx";
import ProjectsWithTabs from "../Projects/ProjectsWithTabs.tsx";
import ContactForm from "../Contact/ContactForm.tsx";
import NavBar from "../NavBar/NavBar.tsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const HeroBannerText = (
  <div className="col text-left mt-[10%] md:mt-[20%] mb-[20%] md:mb-[40%] text-white text-shadow-xl">
    <div className="inline-block align-top text-[16px] leading-[28px]">
      <h3 className="font-montserrat text-[2rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] uppercase animate-fadein text-shadow-lg">
        Explore My Work
      </h3>
    </div>
    <h1 className="font-montserrat text-[5rem] sm:text-[2.5rem] md:text-[4.5rem] lg:text-[6.5rem] animate-fadein">
      Crafting Code with Passion
    </h1>
    <div className="mt-4">
      <a
        href="#work"
        className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        View My Work
      </a>
    </div>
  </div>
);


  return (
    <div className="container overflow-x-hidden">
      <NavBar />

      <HeroBanner heroBannerText={HeroBannerText} />

      <AboutMe />

      <TechUsed />

      <div className="bg-desertBackGroundPattern py-10 bg-cover bg-center" id="projects">
        <div className="container mx-auto">
          <Nav tabs className="mb-5">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                <p>Web</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                <p>Mobile-First</p>
              </NavLink>
            </NavItem>
          </Nav>
          {projects.map((project) => (
            <ProjectsWithTabs
              project={project}
              activeTab={activeTab}
              key={project.id}
            />
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Home;
