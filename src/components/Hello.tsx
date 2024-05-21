import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("/3DModelMac/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[0, 3, -1]}
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
      <pointLight intensity={0.5} position={[0, -1, 0]} />
      <ambientLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 3 : 6}
        position={isMobile ? [0, -1, 1] : [0, -1, 1]}
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
    <section className="w-full h-screen relative">
      <div id="shadow-lightPink" className="left-[-20%] bottom-[-25%]"></div>
      <div id="shadow-purple" className="right-[-25%] top-[-25%]"></div>
      <article className="container h-full mx-auto flex items-center gap-4">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-[60px] text-center">
            سلام من سعید توازانی هستم <br /> توسعه دهنده
            <span className="text-gradient"> Front-End </span> هستم
          </h1>
        </div>
        <div className="flex-1 h-full flex items-center">
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
        </div>
      </article>
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
    </section>
  );
};
export default Hello;
