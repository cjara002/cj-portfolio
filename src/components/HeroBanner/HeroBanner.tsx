import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HeroBannerProps {
  heroBannerText: JSX.Element;
}

const heroBannerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 1, ease: "easeOut" } },
};

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBannerText }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="relative h-full bg-cover bg-center bg-desertLandscape" ref={ref}>
        <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={heroBannerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center justify-center"
        >
            {heroBannerText}
          </motion.div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default HeroBanner;
