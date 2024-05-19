const Hello = () => {
  return (
    <section className="w-full h-screen">
      <article className="container h-full mx-auto flex items-center gap-4">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-[60px]">
            سلام من سعید توازانی هستم <br /> توسعه دهنده{" "}
            <span className="text-gradient">Front-End</span> هستم.
          </h1>
        </div>
        <div className="flex-1">
          <h1>سلام من سعید توازانی هستم من توسعه دهنده هستم.</h1>
        </div>
      </article>
    </section>
  );
};

export default Hello;
