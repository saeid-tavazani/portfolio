import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("/3dmodel/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[2, 1, 0]}
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
        scale={isMobile ? 3 : 7.5}
        position={isMobile ? [0, -1, 0] : [0, -1, 0]}
        rotation={[0, 0, 0.3]}
      />
    </mesh>
  );
};

const Hello = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

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
    <section className="w-full h-screen relative overflow-hidden">
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
    </section>
  );
};
export default Hello;
