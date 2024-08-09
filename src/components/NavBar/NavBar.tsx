import NavButton from "../Button/NavButton";
import urls from "../../helper/Urls"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black bg-opacity-90 w-full h-16 sticky top-0 z-20">
      {/* <div className="container mx-auto flex justify-between items-center h-full"> */}
        <div className="container mx-auto flex justify-between items-center h-full" >
          <div className="flex space-x-4" >
            <ul className="flex items-center space-x-4">
              <li>
                <NavButton
                  href={urls.github}
                  title="GitHub"
                  textSize="text-lg"
                  iconClass="fab fa-github"
                />
                <NavButton
                  href={urls.github}
                  title="GitHub"
                  textSize="text-sm hidden lg:inline-block"
                  iconClass="fab fa-github"
                />
              </li>
              <li>
                <NavButton
                  href={urls.linkedin}
                  title="LinkedIn"
                  textSize="text-lg"
                  iconClass="fab fa-linkedin"
                />
                <NavButton
                  href={urls.linkedin}
                  title="LinkedIn"
                  textSize="text-sm hidden lg:inline-block"
                  iconClass="fab fa-linkedin"
                />
              </li>
            </ul>
          </div>

          <div className="col-9">
            <ul className="navButton">
              <li>
                {" "}
                <Link to="/" className="text-lg">
                  Home
                </Link>

                <Link to="/" className="text-sm hidden lg:inline-block">
                  <i className="fa-1x mr-2 fas fa-home"></i>
                </Link>
              </li>
              <li>
                {" "}
                <NavButton
                  href={urls.about}
                  textSize="text-lg"
                  text="About Me"
                />
                <NavButton
                  href={urls.about}
                  title="About Me"
                  textSize="text-sm hidden lg:inline-block"
                  iconClass= "fa-1x mr-2 fas fa-laptop"
                />
              </li>
              <li>
                <NavButton
                  href={urls.myProjects}
                  textSize="text-lg"
                  text="Web/Mobile App"
                />
                <NavButton
                  href={urls.myProjects}
                  title="Web/Mobile App"
                  textSize="text-sm hidden lg:inline-block"
                  iconClass= "fa-1x mr-2 fas fa-briefcase"
                />
              </li>
              <li>
                <NavButton
                  href={urls.formBorder}
                  textSize="text-lg"
                  text="Let's Connect"
                />
                <NavButton
                  href={urls.formBorder}
                  title="Let's Connect"
                  textSize="text-sm hidden lg:inline-block"
                  iconClass= "fa-1x mr-2 fas fa-envelope-open-text"
                />
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
