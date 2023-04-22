import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import BoneModels from "./BoneModels";
import { useMediaQuery } from "@react-hook/media-query";
import { useState, useEffect } from "react";

function BoneModelCanvas() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const isSmallScreens = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    setIsSmallScreen(isSmallScreens);
  }, [isSmallScreens]);

  const orbitRef = useRef<any | null>(null);
  const handleDoubleClick = () => {
    if (orbitRef.current) {
      orbitRef.current.reset();
    }
  };

  return (
    <Canvas
      onDoubleClick={handleDoubleClick}
      style={
        !isSmallScreen
          ? {
              height: 1000,
              width: 500,
              margin: "auto",
            }
          : {
              height: 500,
              width: 250,
              margin: "auto",
            }
      }
      className="flex justify-center"
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 300]}
        near={0.1}
        far={1000}
      >
        <directionalLight
          position={[1, 1, 2]}
          color="#ffffff"
          intensity={0.75}
        />
        <pointLight position={[0, -25, 10]} color="#ffffff" intensity={0.3} />
      </PerspectiveCamera>
      <ambientLight color={"#ffffff"} intensity={0.1} />
      <Suspense>
        <Center>
          <OrbitControls maxDistance={600} minDistance={0} ref={orbitRef} />
          <BoneModels
          // tenantId={tenantId}
          // surfaces={surfaces}
          // accessToken={accessToken}
          // showFemur={showFemur}
          // showFemurOsteophytes={showFemurOsteophytes}
          // showTibia={showTibia}
          // showTibiaOsteophytes={showTibiaOsteophytes}
          // osteophytesOpacity={osteophytesOpacity}
          />
        </Center>
      </Suspense>
    </Canvas>
  );
}

export default BoneModelCanvas;
