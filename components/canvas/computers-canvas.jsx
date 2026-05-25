import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "@/components/canvas/canvas-loader";
import { createSafePointerEvents } from "@/components/canvas/safe-events";

function Computers({ isMobile }) {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor="black" />
      <spotLight
        position={[-18, 32, 12]}
        angle={0.24}
        penumbra={1}
        intensity={140}
        castShadow
      />
      <pointLight intensity={18} position={[2, 3, 3]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.68 : 0.78}
        position={isMobile ? [0, -3.1, -1.8] : [0, -3.3, -1.5]}
        rotation={[-0.02, -0.22, -0.08]}
      />
    </mesh>
  );
}

export default function ComputersCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      events={createSafePointerEvents}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 6], fov: 24 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      className="!h-full !w-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

useGLTF.preload("/desktop_pc/scene.gltf");
