import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Scene";

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <OrbitControls args={[camera, domElement]} />;
}

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
        <div className="flex-1 h-full flex items-center">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <Controls />
              <Model />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
      </article>
    </section>
  );
};

export default Hello;
