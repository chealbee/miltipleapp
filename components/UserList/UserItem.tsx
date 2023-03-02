import clases from "./User.module.scss";
import plusimg from "../../assets/plus.svg";
import minusimg from "../../assets/minus.svg";
import Image from "next/image";
import { addInvate, IUser } from "@/store/users/users";
import { FC } from "react";
import { useAppDispatch, useAppselector } from "@/store/reduxHooks";
import { motion } from "framer-motion";

const UserItem: FC<{ data: IUser; custom?: number }> = ({
  data,
  custom = 0,
}) => {
  const dispatch = useAppDispatch();
  const sendMasageTo = () => {
    dispatch(addInvate(data.id));
  };
  const isSend = useAppselector((store) => store.users.requsted).includes(
    data.id
  );
  const usersVariants = {
    initial: () => {
      return { opacity: 0, y: 40 };
    },
    animate: (c: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: { delay: 0.4 + c * 0.1, duration: 0.2 },
      };
    },
  };
  return (
    <motion.li
      className={clases.user}
      initial={"initial"}
      animate={"animate"}
      variants={usersVariants}
      custom={custom}
    >
      <Image
        className={clases.logo}
        src={data.avatar}
        alt="some"
        width={200}
        height={200}
        quality={100}
      />
      <div className={clases.content}>
        <h4>{data.first_name}</h4>
        <p>
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
          </svg>
          {data.email}
        </p>
      </div>
      <Image
        className={clases.button}
        src={isSend ? minusimg : plusimg}
        alt="Action"
        onClick={sendMasageTo}
      />
    </motion.li>
  );
};
export default UserItem;
