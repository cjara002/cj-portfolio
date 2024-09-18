import React from "react";
import familyPhoto from "../../assets/img/fatherAndSon.png";
import pdf from "../../helper/CarlosJaraResume2024v.5.pdf";

const AboutMe: React.FC = () => {
  return (
    <div className="pt-20 bg-darkLizards text-gray-400"  id="about-me">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 sm:w-full mb-8">
            <h1 className="mb-3">About Me</h1>
            <p className="text-white text-lg mb-6">
              <span className="font-bold text-white text-xl">I</span> am a
              full-stack developer who constantly challenges myself both in work
              and in my personal life. I have a passion for cooking, app
              development, and home renovation projects. Additionally, I have
              been playing tennis for over 10 years and have honed my skills
              with a powerful topspin forehand. I am a father to a beautiful boy. 
              I love teaching him new things like ASL, brushing his teeth, and 
              how to use tools.
              <br />
              <br />
              <span className="font-bold text-white text-xl">Currently,</span>I
              am working on projects that will push my skills to the next level.
              One of these projects is ChoreQuest, an app that gamifies chores
              for children. I am also building a web application called TopSpin
              Maxxed to help tennis players track matches and set up
              tournaments. I am using new technologies like Supabase, Blazor,
              and React Native.
            </p>
            <div className="w-full lg:w-4/5 overflow-hidden">
              <a
                href={pdf}
                target="/"
                download
                className="bg-white text-black hover:text-white hover:bg-gray-900 font-semibold uppercase text-sm py-4 px-8 rounded transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 hidden sm:block relative border-l border-white pl-8">
            <img
              src={familyPhoto}
              alt="Family Photo"
              className="w-1/2 h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
