import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          marginTop: 40,
          color: "#f8fafc",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
}
