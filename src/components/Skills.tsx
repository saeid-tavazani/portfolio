import Layout from "./Layout";
import { Skills as Ability } from "../assets/data";

const Skills = () => {
  return (
    <Layout slug="skills" className="flex-col justify-center" display="flex">
      <h2 className="text-center text-3xl font-bold">مهارت های من</h2>
      <div className="flex gap-4 justify-center py-5 flex-wrap">
        {Ability.map((item) => (
          <img className="w-14" src={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
