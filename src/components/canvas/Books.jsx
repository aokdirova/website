import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Books = ({ isMobile }) => {
  const books = useGLTF("./books/wizardry_still_life.glb");
  return (
    <mesh>
      <hemisphereLight intensity={0.9} groundColor='black' />
      <pointLight intensity={10} />
      <ambientLight intensity={0.5} />
      <primitive
        object={books.scene}
        scale={isMobile ? 0.6 : 1}
        position={isMobile ? [-1.5, -0.3, -0.55] : [-2, 0, 0]}
        rotation={[0, 0, -0.5]}
      />
    </mesh>
  );
};

const BooksCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  //TODO move this to the utils and make a custom hook of it to check if isMobile and isTablet
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
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
        <Books isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BooksCanvas;
