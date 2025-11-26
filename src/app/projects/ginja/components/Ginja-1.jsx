import React, { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const {
    mousePosition,
    isHovering,
    isClicked,
    isDragging,
    scale = 1,
    ...otherProps
  } = props;
  const { nodes, materials } = useGLTF("/models/ginja-1.glb");
  const groupRef = useRef();
  const meshRef = useRef();

  // AUTO-ROTATION SPEED CONTROL - Change this value to adjust rotation speed
  const autoRotationSpeed = 0.35; // Increase this value for faster rotation, decrease for slower

  useFrame((state) => {
    if (groupRef.current && meshRef.current) {
      // AUTO-ROTATION: Only rotate when not hovering
      if (!isHovering) {
        groupRef.current.rotation.y += autoRotationSpeed * 0.01; // Continuous 360° rotation
      }

      // HOVER INTERACTION: Apply hover effects when hovering but not dragging
      if (isHovering && mousePosition && !isDragging) {
        // ENHANCED HOVER INTERACTION - Much more responsive and dramatic
        const targetRotationY = mousePosition.x * 0.8;
        const targetRotationX = mousePosition.y * 0.4;

        // Faster and more responsive interpolation
        groupRef.current.rotation.y +=
          (targetRotationY - groupRef.current.rotation.y) * 0.2;
        groupRef.current.rotation.x +=
          (targetRotationX - groupRef.current.rotation.x) * 0.2;

        // Enhanced floating animation when hovering
        groupRef.current.position.y =
          Math.sin(state.clock.elapsedTime * 2.5) * 0.08;

        // More noticeable scale up when hovering - but preserve the base scale
        const targetScale = scale * 1.08;
        const currentScale = groupRef.current.scale.x;
        groupRef.current.scale.setScalar(
          currentScale + (targetScale - currentScale) * 0.15
        );
      } else if (!isHovering && !isDragging) {
        // Return to neutral position when not hovering
        groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * 0.08;
        groupRef.current.position.y += (0 - groupRef.current.position.y) * 0.08;

        // Return to original scale (which is the prop scale, not 1.0)
        const targetScale = scale;
        const currentScale = groupRef.current.scale.x;
        groupRef.current.scale.setScalar(
          currentScale + (targetScale - currentScale) * 0.08
        );
      }
    }
  });

  return (
    <group ref={groupRef} {...otherProps} dispose={null}>
      <Center>
        <mesh
          ref={meshRef}
          geometry={
            nodes["016-01_GIFO_Verpackungen_RZ_mushroom-shiitakeV2_(1)002"]
              .geometry
          }
          material={
            materials["016-01 GIFO Verpackungen_RZ_mushroom-shiitakeV2 (1).002"]
          }
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={scale}
        />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/ginja-1.glb");
