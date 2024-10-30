import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experience from "../../helper/Technology.tsx";

interface Tech {
  tech: string;
  image: string;
}

const TechUsed: React.FC = () => {
  const [techUsed, setTechUsed] = useState<Tech[]>([]);
  const [current, setCurrent] = useState(0);
  const sixSeconds = 6000;

  useEffect(() => {
    setTechUsed(experience);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === techUsed.length - 1 ? 0 : prev + 1));
    }, sixSeconds);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [techUsed.length]);

  const nextImage = () => {
    setCurrent((prev) => (prev === techUsed.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrent((prev) => (prev === 0 ? techUsed.length - 1 : prev - 1));
  };

  return (
      <div className="techUsed bg-desertLandscapeAtNight bg-cover bg-center h-full relative pt-10 pb-10 px-4 sm:px-8 lg:px-12" id="skills">
        <div className="container mx-auto">
          <h1 className="mb-5 text-4xl font-bold text-yellow-500">Skills</h1>
          <div className="flex items-center justify-center relative h-96 bg-blue-900 bg-opacity-50 rounded-2xl p-4">

            <button
              onClick={previousImage}
              className="flex text-black justify-center left-0 gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group hover:bg-yellow-500 transition duration-300 ease-in-out"
            >
              <svg
                className="w-8 h-8 group-hover:-rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 -rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                />
              </svg>
            </button>

            <div className="w-96 h-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={techUsed[current]?.tech}
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -200 }}
                  transition={{ duration: 0.8 }}
                  className="absolute w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    className="mb-2 w-24 h-24 sm:w-48 sm:h-48 rounded-full border-4 border-orange-500 shadow-lg"
                    src={techUsed[current]?.image}
                    alt={techUsed[current]?.tech}
                  />
                  <h5 className="text-4lg text-white sm:text-sm uppercase font-semibold">
                    {techUsed[current]?.tech}
                  </h5>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextImage}
              className="flex text-black justify-center left-0 gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group hover:bg-yellow-500 transition duration-300 ease-in-out"
            >
              <svg
                className="w-8 h-8 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
};

export default TechUsed;
