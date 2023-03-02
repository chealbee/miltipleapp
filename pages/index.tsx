import Link from "next/link";
import { motion } from "framer-motion";

const index = () => {
  const MotionLink = motion(Link);
  return (
    <div className="mainPage">
      <motion.h1
        className="mainPage__heading"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        This site is made with Next
      </motion.h1>
      <motion.p
        className="mainPage__paragraph"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        I made this site as an example, on it I implemented functions that occur
        during the development of real projects
      </motion.p>
      <MotionLink
        href={"/users"}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "anticipate" }}
      >
        Go to examples
      </MotionLink>
    </div>
  );
};
export default index;
