import { NavbarData } from "../assets/data";
const Navbar = () => {
  return (
    <header className="w-screen my-4 lg:my-8 fixed top-0 left-0 right-0 z-50">
      <article className="container px-5 mx-auto flex items-center gap-2 justify-between flex-wrap md:flex-row flex-col md:text-start text-center">
        <div>
          <h1 className="font-bold text-xl mb-1">{NavbarData.name}</h1>
          <p>{NavbarData.jobPosition}</p>
        </div>
        <ul className="flex items-center gap-4">
          {NavbarData.navigation.map((item) => (
            <li key={item.slug}>
              <a href={`#${item.slug}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <a
          id="tel"
          className="hidden md:flex items-center gap-2 border border-solid rounded-full py-3 px-6"
          href={NavbarData.contactMe.slug}
        >
          {NavbarData.contactMe.icon}
          <span>تماس با من</span>
        </a>
      </article>
    </header>
  );
};

export default Navbar;
