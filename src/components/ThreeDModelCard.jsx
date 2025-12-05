import { useMemo, useState, useCallback, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { BalloonModel } from "./Balloon";
import { OutdoorSittingModel } from "./outdoor-sitting";

const modelComponentsMap = {
  "outdoor-sitting": OutdoorSittingModel,
  balloon: BalloonModel,
};

// Loading fallback component (for Canvas)
const CanvasLoader = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#cccccc" wireframe />
    </mesh>
  );
};

// Loading fallback component (for outside Canvas)
const ModelLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
  </div>
);

// Error fallback component
const ModelError = () => (
  <div className="flex items-center justify-center h-full text-gray-500">
    <div className="text-center">
      <div className="text-2xl mb-2">⚠️</div>
      <div className="text-sm">Model failed to load</div>
    </div>
  </div>
);

const ThreeDModelCard = ({
  modelKey = "outdoor-sitting",
  height = 420,
  scale = 0.02,
  onLoad,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const ModelComp = useMemo(() => modelComponentsMap[modelKey], [modelKey]);

  // Set loading to false after a short delay to ensure Canvas is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Call onLoad callback when model is ready (only once per model)
      if (onLoad) {
        onLoad();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [modelKey]); // Remove onLoad from dependencies to prevent infinite calls

  const handlePointerMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePosition({ x, y });
  }, []);

  return (
    <div
      className="relative w-full rounded-lg bg-gray-100 dark:bg-gray-800"
      style={{ height, minHeight: height }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsDragging(false);
      }}
      onMouseMove={handlePointerMove}
    >
      {hasError ? (
        <ModelError />
      ) : isLoading ? (
        <ModelLoader />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          onCreated={({ gl }) => {
            // Handle WebGL context errors safely
            try {
              if (gl && gl.domElement) {
                gl.domElement.addEventListener("webglcontextlost", () => {
                  setHasError(true);
                });
              }
            } catch (error) {
              console.warn("WebGL setup error:", error);
              setHasError(true);
            }
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            {ModelComp ? (
              <ModelComp
                mousePosition={mousePosition}
                isHovering={isHovering}
                isDragging={isDragging}
                scale={scale}
              />
            ) : (
              <CanvasLoader />
            )}
          </Suspense>
          <Environment preset="studio" />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            onStart={() => setIsDragging(true)}
            onEnd={() => setIsDragging(false)}
          />
        </Canvas>
      )}
    </div>
  );
};

export default ThreeDModelCard;
