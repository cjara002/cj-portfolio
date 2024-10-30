import { motion } from "framer-motion";

interface HeroBannerProps {
  heroBannerText: JSX.Element;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBannerText }) => {
  return (
    <div className="relative h-full bg-cover bg-center bg-desertLandscape">
      <div className="relative h-full bg-cover bg-center bg-desertLandscape">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {heroBannerText}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
