import HeroBanner from "../HeroBanner/HeroBanner.tsx";
import AboutMe from "../AboutMe/AboutMe.tsx";
import TechUsed from "../TechUsed/TechUsed.tsx";
import Projects from "../Projects/Projects.tsx";
import ContactForm from "../Contact/ContactForm.tsx";
import NavBar from "../NavBar/NavBar.tsx";

const Home = () => {
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
      <div className="mt-6 flex justify-center">
        <a
          href="#projects"
          className="flex text-black justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group hover:bg-yellow-500 transition duration-300 ease-in-out"
        >
          See Work
          <svg
            className="w-8 h-8 group-hover:rotate-180 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-800 group-hover:fill-gray-800"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className="overflow-x-hidden" id="home">
      <NavBar />

      <HeroBanner heroBannerText={HeroBannerText} />

      <AboutMe />

      <TechUsed />

      <Projects />

      <ContactForm />
    </div>
  );
};

export default Home;
