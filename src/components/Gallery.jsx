import { artGallery } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const GalleryImageCard = ({ image, alt, index }) => {
  return (
    <div className='bg-black-200 rounded-3xl xs:w-[320px] my-5'>
      <div className='scroll-snap w-full xs:w-[320px]'>
        <a onClick={() => window.open(image, "_blank")}>
          <img
            src={image}
            alt={alt}
            className='w-full rounded-3xl object-fill cursor-pointer'
          />
        </a>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] h-100`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} `}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Here is some of my art collection
          </p>
          <h2 className={styles.sectionHeadText}>Gallery</h2>
        </motion.div>
      </div>
      <div
        className={`flex items-center gap-10 p-5 overflow-y-hidden overflow-x-scroll scroll-smooth h-[500px]`}>
        {artGallery.map((artGallery, index) => (
          <GalleryImageCard
            key={`${index}-gallery-image`}
            index={index}
            {...artGallery}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Gallery, "gallery");
