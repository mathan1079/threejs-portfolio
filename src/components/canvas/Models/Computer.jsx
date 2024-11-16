import React from "react";
import { useGLTF } from "@react-three/drei";

const Computers = ({ isMobile, isTablet }) => {
  const { scene, nodes, materials } = useGLTF("./desktop_pc/scene.gltf");

  // Clean up resources on unmount
  React.useEffect(() => {
    return () => {
      scene?.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose();
          child.material?.dispose();
        }
      });
    };
  }, [scene]);

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
        object={scene}
        scale={isMobile ? 0.34 : isTablet ? 0.48 : 0.75}
        position={isMobile ? [-2.8, -2.0, -2.2] : isTablet ? [-2.8, -2, -2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default Computers;
