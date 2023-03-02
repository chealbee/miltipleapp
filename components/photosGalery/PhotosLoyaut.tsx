import PhotosColection from "./PhotosColection";
import { motion } from "framer-motion";

export interface IpotosItem {
  category: number;
  name: string;
  photos: string[];
}

const PhotosLoyaut = ({ data }: { data: IpotosItem[] }) => {
  return (
    <div className="App">
      <div className="content">
        {data.map((ell) => {
          return (
            <PhotosColection
              key={ell.name}
              images={ell.photos}
              name={ell.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PhotosLoyaut;
