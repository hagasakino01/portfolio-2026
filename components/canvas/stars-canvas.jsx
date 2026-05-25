import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import { createSafePointerEvents } from "@/components/canvas/safe-events";

function Stars(props) {
  const ref = useRef(null);
  const pointCount = 5000;
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(pointCount * 3), {
      radius: 1.2,
    }),
  );

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 16;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#67e8f9"
          size={0.0024}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 1] }} events={createSafePointerEvents}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}
