import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import images from "../Helper/Images.js";
// import SuccessScreen from "../Screens/success"
// import ErrorScreen from "../Screens/error"
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/success" element={<SuccessScreen />} />
          <Route path="/error" element={<ErrorScreen />} />  */}
        </Routes>
        <footer className="bg-primary bg-opacity-90">
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
