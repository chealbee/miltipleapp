import { useAppselector } from "@/store/reduxHooks";
import { AnimatePresence } from "framer-motion";
import { FC, ReactNode } from "react";
import Popup from "../popup/PhotoPopup";
import Header from "./header/Header";
import InformationButton from "./informationButton/InformationButton";

const Loyaut: FC<{ children: ReactNode }> = ({ children }) => {
  const IsOpenPopupp = useAppselector((stor) => stor.fotos.IsOpenPopupp);
  return (
    <div className="loyaut">
      <AnimatePresence>{IsOpenPopupp && <Popup />}</AnimatePresence>
      <Header />
      <main className="main">{children}</main>
      <InformationButton />
    </div>
  );
};
export default Loyaut;
