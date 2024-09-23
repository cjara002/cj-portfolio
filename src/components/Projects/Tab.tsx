import { TabPane, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  stack: string;
  description: string;
  image: string;
  type: "web" | "mobile"| string;
}

interface TabProps {
  project: Project;
}

const Tab = ({ project }: TabProps) => {
  return (
    <>
    <TabPane tabId={project.type === "web" ? "1" : "2"}>
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <div className="card bg-white shadow-lg p-6">
            <div className="flex flex-wrap">
              <div className="hidden sm:block w-7/12">
                <img
                  src={project.image}
                  className="object-cover w-full"
                  alt="Project Example"
                />
              </div>

              <div className="w-full sm:w-5/12">
                <div className="p-4">
                  <h1 className="text-xl font-bold">{project.name}</h1>
                  <p className="mt-2">
                    <span className="font-semibold">Technology:</span> {project.stack}
                  </p>
                  <p className="mt-2">{project.description}</p>
                  <div className="text-center mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      {/* <Link to={`/details/${project.id}`}>View More</Link> */}
                      <Link to={`/`}>View Demo</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </TabPane>
  </>
  );
};

export default Tab;
