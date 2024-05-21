import { ReactNode } from "react";

type prop = {
  children: ReactNode;
  classStyle: string;
};

const Layout = ({ children, classStyle }: prop) => {
  return (
    <section className="w-screen h-screen flex items-center">
      <article
        className={`container mx-auto grid gap-4 ${
          classStyle ? classStyle : ""
        }`}
      >
        {children}
      </article>
    </section>
  );
};

export default Layout;
