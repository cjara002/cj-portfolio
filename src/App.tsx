// import Home from "../Home/Home";
import NavBar from "../src/components/NavBar/NavBar";
// import ProjectDetails from "../Projects/Projects2/ProjectDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./Portfolio.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import images from "../Helper/Images.js";
// import SuccessScreen from "../Screens/success"
// import ErrorScreen from "../Screens/error"

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProjectDetails />} />
          <Route path="/success" element={<SuccessScreen />} />
          <Route path="/error" element={<ErrorScreen />} /> */}
        </Routes>
        <footer className="bg-gray-900">
          <div className="py-4 border-t border-gray-200">
            <div className="container mx-auto">
              <div className="text-center">
                <p className="mb-0 text-white opacity-90">&copy; 2024 - CJJ</p>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
};

export default App;
