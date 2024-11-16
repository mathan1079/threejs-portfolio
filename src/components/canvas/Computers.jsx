import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./Loader";
import Computers from "./Models/Computer";

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
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "95vh",
        overflow: "hidden",
      }}
    >
      {/* Background Canvas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: isMobile ? "700px" : "100%",
          touchAction: "none",
        }}
      >
        <Canvas
          camera={{
            position: isMobile
              ? [10, 3, 5]
              : isTablet
              ? [185, 3, 5]
              : [20, 3, 5],
            fov: isMobile ? 40 : isTablet ? 30 : 25,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={!isMobile} // Allow zoom only on desktop/tablet
              enableRotate
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} isTablet={isTablet} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // Ensure this content is above the canvas
          padding: "20px",
          color: "#000",
        }}
      >
        <div style={{ height: "200vh", zIndex: -3 }}>&nbsp;</div>
      </div>
    </div>
  );
};

export default ComputersCanvas;
