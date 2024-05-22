import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Layout from "./Layout";
import { AboutMe } from "../assets/data";
import { aboutVariants, helloVariants } from "../motion";
import { motion } from "framer-motion";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("/3DModelDevelopment/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        angle={5}
        penumbra={1}
        intensity={6}
        castShadow
        shadow-mapSize={1200}
      />
      <pointLight intensity={0.5} position={[0, -1, 0]} />
      <ambientLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 0.4}
        position={isMobile ? [0, -1, 0] : [0, -1, 0]}
      />
    </mesh>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Layout slug="about" className="grid-cols-2 grid-rows-3">
      <motion.div
        variants={helloVariants}
        className="col-span-2 row-span-1 lg:row-span-3 lg:col-span-1 w-full h-full"
      >
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
            <ambientLight />
          </Suspense>
          <Preload all />
        </Canvas>
      </motion.div>
      <motion.div
        variants={aboutVariants}
        className="col-span-2 row-span-2 lg:row-span-3 lg:col-span-1 flex flex-col gap-4 w-full h-full justify-start lg:justify-center"
      >
        <h2 className="text-3xl font-bold">درباره من</h2>
        <p>{AboutMe}</p>
      </motion.div>
    </Layout>
  );
};

export default About;
