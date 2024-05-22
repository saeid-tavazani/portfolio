import Layout from "./Layout";
import { Link, ContactMe } from "../assets/data";
import { motion } from "framer-motion";
import { aboutVariants, skillsVariants } from "../motion";

const Contact = () => {
  return (
    <Layout slug="contact" display="flex" className="flex-col justify-center">
      <motion.div variants={aboutVariants} className="w-2/3 text-center">
        <h2 className="text-3xl font-bold mb-4">{ContactMe.title}</h2>
        <p>{ContactMe.text}</p>
      </motion.div>
      <motion.div className="flex items-center gap-3 mt-6 flex-wrap">
        {Link.map((item, index) => (
          <motion.a
            variants={skillsVariants(index / 20)}
            href={item.slug}
            key={item.slug}
            target="_blank"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </Layout>
  );
};

export default Contact;
