import { ReactNode } from "react";
import { motion } from "framer-motion";
type prop = {
  children?: ReactNode;
  className?: string;
  slug?: string;
  display?: "grid" | "flex";
};

const Layout = ({ children, className, slug, display }: prop) => {
  return (
    <section id={slug} className="w-100% h-lvh overflow-hidden relative">
      <motion.article
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        className={`container mx-auto ${
          display ? display : "grid"
        } h-full pt-28 lg:pt-0 items-center px-5 gap-4 ${
          className ? className : ""
        }`}
      >
        {children}
      </motion.article>
    </section>
  );
};

export default Layout;
