import { setSearch } from "@/store/fotosgalery/fotosSlice";
import { useAppDispatch, useAppselector } from "@/store/reduxHooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const categories = [
  { name: "All" },
  { name: "Sea" },
  { name: "Hiking" },
  { name: "Architecture" },
  { name: "CIties" },
];

const SearchBlock = () => {
  const searchValue = useAppselector((store) => store.fotos.serch);
  const dispatch = useAppDispatch();
  const { query } = useRouter();
  const SeacrhVariants = {
    initial: () => {
      return { opacity: 0 };
    },
    animate: (c: number) => {
      return {
        opacity: 1,
        transition: { duration: 0.2, delay: c * 0.1 },
      };
    },
  };
  return (
    <div className="top">
      <ul className="tags">
        {categories.map((category, inx) => {
          return (
            <motion.li
              key={category.name}
              className={query?.category == "" + inx ? "active" : ""}
              initial={"initial"}
              animate={"animate"}
              variants={SeacrhVariants}
              custom={inx}
            >
              <Link href={`/photos${"/" + inx}`}>{category.name}</Link>
            </motion.li>
          );
        })}
        <motion.input
          className="search-input"
          placeholder="search by name"
          value={searchValue}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          initial={"initial"}
          animate={"animate"}
          variants={SeacrhVariants}
          custom={categories.length + 1}
        />
      </ul>
    </div>
  );
};
export default SearchBlock;
