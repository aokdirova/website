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
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        dolor dolorem recusandae aut nobis enim voluptatibus esse ea sed, illum
        necessitatibus fuga officiis natus, ut, odit dolorum voluptas tempore
        consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Impedit voluptates esse architecto odio ipsum facere repellat, ut
        debitis aperiam quod modi, id quidem hic dolorum officiis tenetur
        assumenda enim. Dolor?
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
