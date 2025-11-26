import React, { useRef } from "react";
import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BalloonModel(props) {
  const { nodes, materials } = useGLTF("/3D/Balloon.glb");
  const groupRef = useRef();

  // Auto-rotation speed control
  const autoRotationSpeed = 0.35;

  useFrame(() => {
    if (groupRef.current) {
      // Continuous auto-rotation
      groupRef.current.rotation.y += autoRotationSpeed * 0.01;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <Center>
        {Object.values(nodes)
          .filter((n) => n && n.geometry)
          .map((n, i) => (
            <mesh
              key={i}
              geometry={n.geometry}
              material={materials?.[n.material?.name] || undefined}
            />
          ))}
      </Center>
    </group>
  );
}

useGLTF.preload("/3D/Balloon.glb");
