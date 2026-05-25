import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "@/components/canvas/canvas-loader";
import { createSafePointerEvents } from "@/components/canvas/safe-events";

function Earth() {
  const earth = useGLTF("/planet/scene.gltf");

  return <primitive object={earth.scene} scale={2.45} position={[0, -0.15, 0]} />;
}

export default function EarthCanvas() {
  return (
    <Canvas
      events={createSafePointerEvents}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className="!h-full !w-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.25} />
        <directionalLight position={[2, 4, 2]} intensity={3.5} />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

useGLTF.preload("/planet/scene.gltf");
