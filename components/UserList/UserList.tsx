import UserItem from "./UserItem";
import clases from "./User.module.scss";
import Sugest from "./Sugest";
import { useAppDispatch, useAppselector } from "@/store/reduxHooks";
import { useState } from "react";
import { search } from "@/store/users/users";
import { motion } from "framer-motion";
const UserList = () => {
  const users = useAppselector((stete) => stete.users.filtredUsers);
  const [serchBy, setSerchBy] = useState("");
  const dispatch = useAppDispatch();
  const [isSend, setIsSend] = useState(false);

  const Send = () => {
    setIsSend(!isSend);
  };
  if (!isSend) {
    return (
      <motion.ul
        className={clases.UserList}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className={clases.search}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <input
            type="text"
            placeholder="search"
            value={serchBy}
            onChange={(e) => {
              setSerchBy(e.target.value);
              dispatch(search(e.target.value));
            }}
          />
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </motion.div>
        {users.map((ell, indx) => {
          return <UserItem key={ell.id} data={ell} custom={indx} />;
        })}
        <motion.button
          className={clases["send-invite-btn"]}
          onClick={() => Send()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          masage
        </motion.button>
      </motion.ul>
    );
  } else {
    return (
      <ul className={clases.UserList}>
        <Sugest back={Send} />
      </ul>
    );
  }
};
export default UserList;
