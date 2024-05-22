import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Layout from "./Layout";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("/3DModelMac/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={isMobile ? [0, 3.6, -1.5] : [0, 3, -1]}
        angle={5}
        penumbra={2}
        intensity={8}
        castShadow
        shadow-mapSize={1200}
      />
      <spotLight
        // position={[2, 1, 0]}
        angle={5}
        penumbra={1}
        intensity={6}
        castShadow
        shadow-mapSize={1200}
      />
      <pointLight intensity={0.5} position={[-0.3, -1, 1]} />
      <ambientLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 12 : 6}
        position={isMobile ? [0, 0, 0] : [0, -1, 1]}
        rotation={[0, 1.6, 0.3]}
      />
    </mesh>
  );
};

const Hello = () => {
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
    <Layout slug="home" className="grid-cols-2 grid-rows-3">
      <div className="col-span-2 row-span-1 lg:row-span-3 lg:col-span-1">
        <h1 className="text-4xl font-bold leading-[60px] text-center">
          سلام من سعید توازانی هستم <br className="hidden lg:block" /> توسعه
          دهنده
          <span className="text-gradient"> Front-End </span> هستم
        </h1>
      </div>
      <div className="col-span-2 row-span-2 lg:row-span-3 lg:col-span-1 w-full h-full">
        <div className="w-full h-full">
          <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ near: 0.1, far: 1000 }}
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
        </div>
      </div>
      <a
        href="#about"
        className="w-7 h-14 border border-solid absolute bottom-8 left-1/2 rounded-xl flex py-2 justify-center cursor-pointer"
      >
        <motion.span
          animate={{ y: [0, 25, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-white"
        ></motion.span>
      </a>
      <div id="shadow-lightPink" className="left-[-20%] bottom-[-40%]"></div>
      <div id="shadow-purple" className="right-[-25%] top-[-20%]"></div>
    </Layout>
  );
};
export default Hello;
