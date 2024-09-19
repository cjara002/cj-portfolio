import React, { useState } from "react";
import familyPhoto from "../../assets/img/fatherAndSon.png";
import pdf from "../../helper/CarlosJaraResume2024v.5.pdf";

const AboutMe: React.FC = () => {

  const [hovered, setHovered] = useState(false);
  
  return (
    <div className="pt-10 pb-10 bg-darkLizards text-gray-400" id="about-me">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 sm:w-full mb-8">
            <h1 className="mb-3 text-4xl text-yellow-500 font-bold">About Me</h1>
            <p className="text-white text-lg mb-6">
              <span className="font-bold text-yellow-500 text-xl">I</span> am a
              full-stack developer who constantly challenges myself both in work
              and in my personal life. I have a passion for cooking, app
              development, and home renovation projects. Additionally, I have
              been playing tennis for over 10 years and have honed my skills
              with a powerful topspin forehand. I am a father to a beautiful
              boy. I love teaching him new things like ASL, brushing his teeth,
              and how to use tools.
              <br />
              <br />
              <span className="font-bold text-yellow-500 text-xl">
                Currently,
              </span>
              I am working on projects that will push my skills to the next
              level. One of these projects is ChoreQuest, an app that gamifies
              chores for children. I am also building a web application called
              TopSpin Maxxed to help tennis players track matches and set up
              tournaments. I am using new technologies like Supabase, Blazor,
              and React Native.
            </p>
            <div className="w-full lg:w-4/5 overflow-hidden flex justify-center">
              <a
                href={pdf}
                target="/"
                download
                className="cursor-pointer flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md text-white tracking-wider shadow-xl hover:bg-gray-700 transition-all duration-300 animate-bounce"
              >
                <span>Resume</span>
                <svg
                  className="w-5 h-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 hidden sm:block relative border-l border-white pl-8">
            <img
              src={familyPhoto}
              alt="Family Photo"
              className="w-1/2 h-full rounded-xl mx-auto transition-transform duration-300 transform hover:scale-105"
              style={{
                boxShadow: hovered
                  ? '0 10px 15px rgba(255, 255, 255, 0.6)'
                  : 'none',
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
