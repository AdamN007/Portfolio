import { motion } from "framer-motion"

const animations = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 100 },
  exit: { opacity: 0, y: -100 },

  };
  
  const Animation = ({ children }) => {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: .15 }}
      >
        {children}
      </motion.div>
    );
  };

export default Animation;