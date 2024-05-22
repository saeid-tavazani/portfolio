import { ReactNode } from "react";

type prop = {
  children?: ReactNode;
  className?: string;
  slug?: string;
  display?: "grid" | "flex";
};

const Layout = ({ children, className, slug, display }: prop) => {
  return (
    <section id={slug} className="w-screen h-lvh relative">
      <article
        className={`container mx-auto ${
          display ? display : "grid"
        } h-full pt-28 lg:pt-0 items-center px-5 gap-4 ${
          className ? className : ""
        }`}
      >
        {children}
      </article>
    </section>
  );
};

export default Layout;
