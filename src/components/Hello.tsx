import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("/3dmodel/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 3}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.04]}
      />
    </mesh>
  );
};

const Hello = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className="w-full h-screen">
      <article className="container h-full mx-auto flex items-center gap-4">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-[60px]">
            سلام من سعید توازانی هستم <br /> توسعه دهنده{" "}
            <span className="text-gradient">Front-End</span> هستم.
          </h1>
        </div>
        <div className="flex-1 h-full flex items-center">
          <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            // camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense>
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
