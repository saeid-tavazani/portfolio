import Layout from "./Layout";
import { Skills as Ability } from "../assets/data";
import { motion } from "framer-motion";
import { aboutVariants, skillsVariants } from "../motion";

const Skills = () => {
  return (
    <Layout slug="skills" className="flex-col justify-center" display="flex">
      <motion.h2
        variants={aboutVariants}
        className="text-center text-3xl font-bold"
      >
        مهارت های من
      </motion.h2>
      <motion.div className="flex gap-4 justify-center py-5 flex-wrap">
        {Ability.map((item, index) => (
          <motion.img
            variants={skillsVariants(index)}
            className="w-14"
            key={item}
            src={item}
          />
        ))}
      </motion.div>
    </Layout>
  );
};

export default Skills;
