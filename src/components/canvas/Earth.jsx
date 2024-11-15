import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

// Preload the GLTF model efficiently
const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf", true); // Use true to preload the model
  return <primitive object={scene} scale={2.3} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  const [loading, setLoading] = useState(true);

  // Set loading state after model is ready
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate preloading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {loading ? (
        <Suspense fallback={<CanvasLoader />}>
          <Earth />
        </Suspense>
      ) : (
        <Earth />
      )}

      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
