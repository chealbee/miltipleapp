import "@/styles/null.scss";
import "@/styles/globals.scss";
import "@/styles/currencys.scss";
import "@/styles/fotosGalery.scss";
import "@/styles/main.scss";
import Loyaut from "@/components/loyaut/Loyaut";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/index";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Loyaut>
          <Component {...pageProps} />
        </Loyaut>
      </Provider>
    </>
  );
}
