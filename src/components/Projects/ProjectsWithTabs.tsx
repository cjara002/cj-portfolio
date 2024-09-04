import Tab from "./Tab.tsx";
import { TabContent } from "reactstrap";

interface Project {
  id: number;
  name: string;
  stack: string;
  description: string;
  image: string;
  type: "web" | "mobile" | string;
}

interface ProjectsWithTabsProps {
  project: Project;
  activeTab: string;
}

const ProjectsWithTabs = ({ project, activeTab }: ProjectsWithTabsProps) => {
  return (
    <TabContent activeTab={activeTab}>
      <Tab project={project} />
    </TabContent>
  );
};

export default ProjectsWithTabs;
