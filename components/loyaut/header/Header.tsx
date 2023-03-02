import Link from "next/link";
import { useRouter } from "next/router";
import clases from "./header.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navigationLinnks = [
    { name: "main", href: "/" },
    { name: "quiz", href: "/quiz" },
    { name: "converter", href: "/converter" },
    { name: "photos galery", href: "/photos/0" },
    { name: "users", href: "/users" },
  ];
  const { pathname } = useRouter();
  const variants = {
    init: (c: number) => {
      return { opacity: 0 };
    },
    animate: (c: number) => {
      return {
        opacity: 1,
        transition: {
          delay: 0.7 + c * 0.15,
        },
      };
    },
  };

  return (
    <motion.header
      className={clases.header}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.2, delay: 0.7 }}
      initial={{ opacity: 0, y: -100 }}
    >
      <nav>
        <ul className={clases.list}>
          {navigationLinnks.map((ell, indx) => (
            <motion.li
              key={ell.href}
              className={clases.list__item}
              initial={"init"}
              animate={"animate"}
              variants={variants}
              custom={indx}
            >
              <Link
                href={ell.href}
                className={pathname == ell.href ? `activelink` : ""}
              >
                {ell.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
export default Header;
