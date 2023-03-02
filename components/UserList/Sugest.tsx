import { useAppselector } from "@/store/reduxHooks";
import Image from "next/image";
import sugestImg from "../../assets/success.svg";
import { motion } from "framer-motion";
const Sugest = ({ back }: { back: () => void }) => {
  const requstedFor = useAppselector((store) => store.users.requsted);
  return (
    <motion.div
      className="success-block"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Image width={0} height={0} src={sugestImg} alt="Success" />
      <h3>Successfully!</h3>
      <p>All {requstedFor.length} users have been sent an invitation.</p>
      <button className="send-invite-btn" onClick={() => back()}>
        Back
      </button>
    </motion.div>
  );
};
export default Sugest;
