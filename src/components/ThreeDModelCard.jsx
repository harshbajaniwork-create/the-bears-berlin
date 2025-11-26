import React, { useMemo, useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { BalloonModel } from "./Balloon";
import { OutdoorSittingModel } from "./outdoor-sitting";

const modelComponentsMap = {
  "outdoor-sitting": OutdoorSittingModel,
  balloon: BalloonModel,
};

const ThreeDModelCard = ({
  modelKey = "outdoor-sitting",
  height = 420,
  scale = 0.02,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ModelComp = useMemo(() => modelComponentsMap[modelKey], [modelKey]);

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
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          {ModelComp && (
            <ModelComp
              mousePosition={mousePosition}
              isHovering={isHovering}
              isDragging={isDragging}
              scale={scale}
            />
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
    </div>
  );
};

export default ThreeDModelCard;
