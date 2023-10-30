import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        <b className={"text-[20px]"}>Present: </b> A software developer with
        passion not only for coding, but also for art. I try to bring a unique
        blend of creativity and technical expertise to every project I
        undertake. <br />
        <b className={"text-[20px]"}>Future: </b> Currently, I am focused on
        Frontend as it integrates my personal traits in one single passion.
        However, over the years I realised that Backend offers as much room for
        creativity as Frontend. You just have to be able to see it. That is why
        I am currently focused heavily on expanding my knowledge in that area.
        Additionally, I am really interested in DevOps and Cloud. But one step
        at a time, I guess. <br />
        Other than that, I am a regular nerd, who loves reading fantasy (and not only) novels, gaming,
        knitting, and hiking with my family. 
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
