import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import { CanvasTexture, SRGBColorSpace } from "three";

import CanvasLoader from "@/components/canvas/canvas-loader";
import { createSafePointerEvents } from "@/components/canvas/safe-events";

function BallMesh({ decal }) {
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
        {decal ? (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            map={decal}
            scale={1}
            flatShading
          />
        ) : null}
      </mesh>
    </Float>
  );
}

function RasterBall({ icon }) {
  const [decal] = useTexture([icon]);

  decal.colorSpace = SRGBColorSpace;

  return <BallMesh decal={decal} />;
}

function SvgBall({ icon }) {
  const [decal, setDecal] = useState(null);

  useEffect(() => {
    let isActive = true;
    let objectUrl = "";
    let texture = null;

    async function loadSvgTexture() {
      try {
        const response = await fetch(icon);
        const svgText = await response.text();
        const svgBlob = new Blob([svgText], {
          type: "image/svg+xml;charset=utf-8",
        });

        objectUrl = URL.createObjectURL(svgBlob);

        const image = new Image();
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const size = 512;
          const padding = 56;
          const context = canvas.getContext("2d");

          canvas.width = size;
          canvas.height = size;

          if (!context) {
            URL.revokeObjectURL(objectUrl);
            return;
          }

          context.clearRect(0, 0, size, size);
          context.drawImage(image, padding, padding, size - padding * 2, size - padding * 2);

          texture = new CanvasTexture(canvas);
          texture.colorSpace = SRGBColorSpace;
          texture.needsUpdate = true;

          if (isActive) {
            setDecal(texture);
          } else {
            texture.dispose();
          }

          URL.revokeObjectURL(objectUrl);
        };

        image.onerror = () => {
          URL.revokeObjectURL(objectUrl);
        };

        image.src = objectUrl;
      } catch {
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
      }
    }

    loadSvgTexture();

    return () => {
      isActive = false;

      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }

      if (texture) {
        texture.dispose();
      }
    };
  }, [icon]);

  return <BallMesh decal={decal} />;
}

function Ball({ icon }) {
  if (icon.endsWith(".svg")) {
    return <SvgBall icon={icon} />;
  }

  return <RasterBall icon={icon} />;
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
