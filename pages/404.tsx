import { motion } from "framer-motion";
const page404 = () => {
  return (
    <motion.div
      className="page404"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      404 This page could not be found.
    </motion.div>
  );
};
export default page404;
