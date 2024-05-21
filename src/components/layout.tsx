import { ReactNode } from "react";

type prop = {
  children?: ReactNode;
  className?: string;
  slug?: string;
};

const Layout = ({ children, className, slug }: prop) => {
  return (
    <section id={slug} className="w-screen h-screen flex items-center relative">
      <article
        className={`container mx-auto grid items-center gap-4 ${
          className ? className : ""
        }`}
      >
        {children}
      </article>
    </section>
  );
};

export default Layout;
