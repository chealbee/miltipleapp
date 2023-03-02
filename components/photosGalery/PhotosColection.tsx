import { setIsOpenPopupp } from "@/store/fotosgalery/fotosSlice";
import { useAppDispatch } from "@/store/reduxHooks";
import Image from "next/image";
import { motion } from "framer-motion";

const PhotosColection = ({
  name,
  images,
}: {
  name: string;
  images: string[];
}) => {
  const dispatch = useAppDispatch();
  const PhotosVariants = {
    initial: () => {
      return { opacity: 0 };
    },
    animate: () => {
      return {
        opacity: 1,

        transition: { duration: 0.2 },
      };
    },
  };
  return (
    <motion.div
      className="collection"
      initial={"initial"}
      animate={"animate"}
      variants={PhotosVariants}
    >
      <div className="collection__big">
        <Image
          src={images[0]}
          alt="Big foto"
          width={250}
          height={250}
          onClick={() => dispatch(setIsOpenPopupp(images[0]))}
        />
      </div>
      <div className="collection__bottom">
        <Image
          className="collection__mini"
          src={images[1]}
          alt="Item"
          width={100}
          height={100}
          onClick={() => dispatch(setIsOpenPopupp(images[1]))}
        />
        <Image
          className="collection__mini"
          src={images[2]}
          alt="Item"
          width={100}
          height={100}
          onClick={() => dispatch(setIsOpenPopupp(images[2]))}
        />
        <Image
          className="collection__mini"
          src={images[3]}
          alt="Item"
          width={100}
          height={100}
          onClick={() => dispatch(setIsOpenPopupp(images[3]))}
        />
      </div>
      <h4>{name}</h4>
    </motion.div>
  );
};
export default PhotosColection;
