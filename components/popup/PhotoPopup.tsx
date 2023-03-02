import { setIsOpenPopupp } from "@/store/fotosgalery/fotosSlice";
import { useAppDispatch, useAppselector } from "@/store/reduxHooks";
import Image from "next/image";
import clases from "./popup.module.scss";
import { motion } from "framer-motion";
const Popup = () => {
  const dispatch = useAppDispatch();
  const curentFoto = useAppselector((store) => store.fotos.curentFoto);
  return (
    <motion.div
      className={clases.popup}
      onClick={() => dispatch(setIsOpenPopupp(curentFoto))}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={clases.content}
        onClick={(e) => e.stopPropagation()}
        animate={{
          scale: 1,
          opacity: 1,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{
          scale: 0.4,
          opacity: 0,
          translateX: "-50%",
          translateY: "0",
        }}
        exit={{
          scale: 0,
          opacity: 0,
          translateX: "-50%",
          translateY: "0",
          transition: { duration: 0.2 },
        }}
      >
        <p onClick={() => dispatch(setIsOpenPopupp(curentFoto))}>x</p>
        <Image src={curentFoto} alt="Item" width={600} height={500} />
      </motion.div>
    </motion.div>
  );
};
export default Popup;
