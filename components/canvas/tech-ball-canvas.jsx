import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "@/components/canvas/canvas-loader";
import { createSafePointerEvents } from "@/components/canvas/safe-events";

function Ball({ icon }) {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.8} rotationIntensity={1} floatIntensity={1.8}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.65}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff7ed"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          scale={1}
          flatShading
        />
      </mesh>
    </Float>
  );
}

export default function TechBallCanvas({ icon }) {
  return (
    <Canvas
      events={createSafePointerEvents}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      className="!h-full !w-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
