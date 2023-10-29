import { motion } from "framer-motion";
import { styles } from "../styles";
import { BooksCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5674df]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#5674df] to-transparent' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#fbfbfbbb]`}>
            Hi, I'm <span className='text-[#455db5d3]'>Aygul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#fbfbfbbb]-100`}>
            Welcome to my <br className='sm:block hidden' />
            personal website
          </p>
        </div>
      </div>
      <BooksCanvas />
    </section>
  );
};

export default Hero;
