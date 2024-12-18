import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import projects from "../../helper/listOfProject.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tabVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

const panelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2 } },
};

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-cactus bg-cover bg-center" id="projects" ref={ref}>
      <div className="container mx-auto px-8">
        <div className="flex h-screen w-full justify-center pt-24 px-4">
          <div className="w-full">
            <TabGroup>
              <TabList className="flex gap-4">
                {projects.map(({ id, name }) => (
                  <motion.div
                    key={id}
                    custom={id}
                    variants={tabVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <Tab
                      key={id}
                      className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      {name}
                    </Tab>
                  </motion.div>
                ))}
              </TabList>
              <TabPanels className="mt-3">
                {projects.map(({ id, image, stack, description, goal }) => (
                  <TabPanel key={id} className="rounded-xl bg-white p-3">
                    <motion.div
                      variants={panelVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      exit="exit"
                      className="flex flex-wrap mb-4"
                    >
                      <div className="w-full">
                        <div className="card p-6">
                          <div className="flex flex-wrap">
                            <motion.div
                              className="hidden sm:block w-7/12 h-64 overflow-hidden"
                              variants={imageVariants}
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                            >
                              <img
                                src={image}
                                className="object-cover w-full h-full"
                                alt="Project Example"
                              />
                            </motion.div>

                            <div className="w-full sm:w-5/12">
                              <div className="p-4">
                                <motion.p
                                  variants={textVariants}
                                  initial="hidden"
                                  animate={inView ? "visible" : "hidden"}
                                  className="mt-2"
                                >
                                  <span className="font-semibold">
                                    Technology:
                                  </span>{" "}
                                  {stack}
                                </motion.p>
                                <motion.p
                                  variants={textVariants}
                                  initial="hidden"
                                  animate={inView ? "visible" : "hidden"}
                                  className="mt-2"
                                >
                                  <span className="font-semibold">
                                    Description:
                                  </span>{" "}
                                  {description}
                                </motion.p>
                                <motion.p
                                  variants={textVariants}
                                  initial="hidden"
                                  animate={inView ? "visible" : "hidden"}
                                  className="mt-2"
                                >
                                  <span className="font-semibold">Goal:</span>{" "}
                                  {goal}
                                </motion.p>
                                <div className="text-center mt-8">
                                  <div className="flex items-center bg-[#ffcc00] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-[#ffb300] cursor-pointer">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.5em"
                                      height="1.5em"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M3 22V2l18 10-18 10z" />{" "}
                                      {/* Play icon */}
                                    </svg>
                                    <span className="ml-2">Watch Video</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                    </motion.div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
