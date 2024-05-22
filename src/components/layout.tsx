import { ReactNode } from "react";

type prop = {
  children?: ReactNode;
  className?: string;
  slug?: string;
};

const Layout = ({ children, className, slug }: prop) => {
  return (
    <section id={slug} className="w-screen h-screen relative">
      <article
        className={`container mx-auto grid h-full pt-28 lg:pt-0 items-center px-5 gap-4 ${
          className ? className : ""
        }`}
      >
        {children}
      </article>
    </section>
  );
};

export default Layout;
