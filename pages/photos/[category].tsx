import PhotosLoyaut from "@/components/photosGalery/PhotosLoyaut";
import SearchBlock from "@/components/photosGalery/SearchBlock";
import { useAppselector } from "@/store/reduxHooks";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { motion } from "framer-motion";

export interface IpotosItem {
  category: number;
  name: string;
  photos: string[];
}

export const getServerSideProps: GetServerSideProps<{
  data: IpotosItem[];
}> = async (context: GetServerSidePropsContext) => {
  const query = context.params;
  const res = await axios.get(
    `https://63fbe99a6ecb7e3702b14b65.mockapi.io/photos${
      query?.category != "0" ? `?category=${query?.category}` : ""
    }`
  );
  const data = res.data;
  return {
    props: { data },
  };
};

const category = ({ data }: { data: IpotosItem[] }) => {
  const searchValue = useAppselector((store) => store.fotos.serch);
  const serchedPhotos = data.filter((ell) => {
    return ell.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <>
      <motion.h1
        className="photosHeadig"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        My fotos colection
      </motion.h1>
      <SearchBlock />
      <PhotosLoyaut data={serchedPhotos} />
    </>
  );
};
export default category;
