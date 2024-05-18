const Navbar = () => {
  return (
    <header className="w-screen my-8">
      <article className="container mx-auto flex items-center gap-2 justify-between flex-wrap md:flex-row flex-col md:text-start text-center">
        <div>
          <h1 className="font-bold text-xl mb-1">سعید توازانی</h1>
          <p>برنامه نویس Front-End</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">درباره من</a>
          </li>
          <li>
            <a href="#">پروژه ها</a>
          </li>
          <li className="md:hidden block">
            <a href="#">پروژه ها</a>
          </li>
        </ul>
        <a className="hidden md:block" href="#">
          تماس با من
        </a>
      </article>
    </header>
  );
};

export default Navbar;
