const Navbar = () => {
  return (
    <header className="w-screen my-4 lg:my-8 fixed top-0 left-0 right-0 z-50">
      <article className="container px-5 mx-auto flex items-center gap-2 justify-between flex-wrap md:flex-row flex-col md:text-start text-center">
        <div>
          <h1 className="font-bold text-xl mb-1">سعید توازانی</h1>
          <p>برنامه نویس Front-End</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#home">خانه</a>
          </li>
          <li>
            <a href="#about">درباره من</a>
          </li>
          <li>
            <a href="#projects">پروژه ها</a>
          </li>
          <li>
            <a href="#skills">مهارت های من</a>
          </li>
          <li>
            <a href="#contact">راه های ارتباطی</a>
          </li>
        </ul>
        <a
          className="hidden md:flex items-center gap-2 border border-solid rounded-full py-3 px-6"
          href="tel:09911561251"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
          <span>تماس با من</span>
        </a>
      </article>
    </header>
  );
};

export default Navbar;
