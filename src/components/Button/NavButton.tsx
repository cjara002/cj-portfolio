import { motion } from "framer-motion";

interface NavButtonProps {
  href: string;
  title?: string;
  textSize: string;
  iconClass: string;
  text: string;
  isActive?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  href,
  title,
  textSize,
  iconClass,
  text,
  isActive,
}) => {
  return (
    <motion.a
      href={href}
      style={{ cursor: "pointer" }}
      data-toggle="tooltip"
      title={title}
      className={`${textSize} transition duration-300 ease-in-out ${
        isActive ? "text-yellow-500 font-bold" : "text-white"
      } hover:text-yellow-500`}
      whileHover={{ scale: 1.1, color: "#ffcc00" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <i
        className={`${iconClass} hover:scale-110 transition duration-300 ease-in-out`}
      ></i>{" "}
      {text}
    </motion.a>
  );
};

export default NavButton;
