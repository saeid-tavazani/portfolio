import Layout from "./Layout";
import { Link, ContactMe } from "../assets/data";

const Contact = () => {
  return (
    <Layout slug="contact" display="flex" className="flex-col justify-center">
      <div className="w-2/3 text-center">
        <h2 className="text-3xl font-bold mb-4">{ContactMe.title}</h2>
        <p>{ContactMe.text}</p>
      </div>
      <div className="flex items-center gap-3 mt-6 flex-wrap">
        {Link.map((item) => (
          <a href={item.slug} key={item.slug} target="_blank">
            {item.icon}
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Contact;
