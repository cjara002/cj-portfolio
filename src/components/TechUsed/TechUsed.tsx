import React, { useEffect, useState } from "react";
import experience from "../../helper/Technology.tsx";

interface Tech {
  tech: string;
  image: string;
}

const TechUsed: React.FC = () => {
  const [techUsed, setTechUsed] = useState<Tech[]>([]);

  useEffect(() => {
    setTechUsed(experience);
  }, []);

  return (
    <div className="min-h-screen"> 
      <div
        className="techUsed bg-desertLandscapeAtNight bg-cover bg-center h-full relative pt-10 pb-10 px-4 sm:px-8 lg:px-12"
      >
        <div className="container mx-auto">
          <h1 className="mb-5 text-4xl font-bold text-yellow-500">Skills</h1>
          <div className="flex flex-wrap -mx-4">
            {techUsed.map((tech, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                <div className="bg-blue-900 bg-opacity-50 rounded-2xl p-4">
                  <div className="text-center">
                    <img
                      className="mb-2 w-24 h-24 rounded-full border border-orange-500 shadow-lg"
                      src={tech.image}
                      alt={tech.tech}
                    />
                    <h5 className="text-lg sm:text-sm uppercase font-semibold">
                      {tech.tech}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechUsed;
