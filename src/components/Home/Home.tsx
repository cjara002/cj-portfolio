import { useState } from "react";
// import ContactForm from "../ContactMe/ContactForm";
import HeroBanner from "../HeroBanner/HeroBanner.tsx";
// import projects from "../Projects/listOfProject";
// import ProjectWithTabs from "../Projects/Projects2/ProjectsWithTabs";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import AboutMe from "../AboutMe/AboutMe.tsx";
import TechUsed from "../TechUsed/TechUsed.tsx";
import projects from "../../helper/listOfProject.tsx";
import ProjectsWithTabs from "../Projects/ProjectsWithTabs.tsx";
import ContactForm from "../Contact/ContactForm.tsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const HeroBannerText = (
    <div className="col text-left mt-[10%] md:mt-[20%] mb-[20%] md:mb-[40%] text-white text-shadow-xl">
      <div className="inline-block align-top text-[16px] leading-[28px]">
        <h3 className="font-montserrat text-[2rem] md:text-[1.2rem] uppercase animate-fadein text-shadow-lg">
          Explore My Work
        </h3>
      </div>
      <h1 className="font-montserrat text-[8rem] md:text-[5rem] animate-fadein">
        Crafting Code with Passion
      </h1>
    </div>
  );

  return (
    <>
      <HeroBanner heroBannerText={HeroBannerText} />

      <AboutMe />

      <TechUsed />

      <div className="bg-desertBackGroundPattern py-10 bg-cover bg-center">
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
    </>
  );
};

export default Home;
