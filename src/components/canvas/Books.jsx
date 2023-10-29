import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Books = () => {
  const books = useGLTF("./books/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.9} groundColor='black' />
      <pointLight intensity={10} />
      <ambientLight intensity={0.5} />
      <primitive
        object={books.scene}
        scale={1}
        position={[-2, 0, 0]}
        rotation={[0, 0, -0.5]}
      />
    </mesh>
  );
};

const BooksCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={Math.PI / 5}
        />
        <Books />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BooksCanvas;
