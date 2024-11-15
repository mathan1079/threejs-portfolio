import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = ({ isMobile, isTablet }) => {
  // useGLTF is called here, within a child of Canvas
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.34 : isTablet ? 0.48 : 0.75}
        position={isMobile ? [-2.8, -2.0, -2.2] : isTablet ? [-2.8, -2, -2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 500);
      setIsTablet(window.innerWidth > 500 && window.innerWidth <= 1024);
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [10, 2, 5] : isTablet ? [15, 3, 5] : [20, 3, 5],
        fov: isMobile ? 35 : isTablet ? 30 : 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
