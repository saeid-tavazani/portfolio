import About from "./components/About";
import Contact from "./components/Contact";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hello />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
