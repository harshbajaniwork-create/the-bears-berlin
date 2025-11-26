import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Center,
  Environment,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * BearModel (improved)
 * - Spins around its own local Y axis (quaternion-based)
 * - Maintains axis when user interacts
 * - Smooth hover blend using quaternion slerp
 * - Centered pivot via <Center>
 */
function BearModel({
  isDarkMode,
  isUserInteracting,
  // interaction props that you had earlier - provide them from parent if needed
  mousePosition = null,
  isHovering = false,
  isDragging = false,
  scale = [0.222, 0.713, 0.713],
  ...props
}) {
  const groupRef = useRef();
  const meshRef = useRef();
  const { nodes } = useGLTF("/models/bear-plain.glb");

  // theme color
  const bearColor = isDarkMode ? "#B66613" : "#7E3F0F";

  // material memo
  const bearMaterial = React.useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: bearColor,
      roughness: 0.4,
      metalness: 0.6,
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1,
      flatShading: false,
      envMapIntensity: 0.9,
    });
  }, [bearColor]);

  // rotation helpers
  const localUp = React.useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const incrementalQuat = useRef(new THREE.Quaternion());
  const targetQuat = useRef(new THREE.Quaternion());
  const tempEuler = useRef(new THREE.Euler(0, 0, 0, "YXZ")); // order chosen to prioritize Y then X
  const autoRotationSpeed = 0.6; // radians per second (tweakable)

  // keep an internal "neutral" quaternion in case you want an initial offset:
  useEffect(() => {
    // if your mesh needs an initial rotation to look correct, set it here:
    // e.g. tempEuler.current.set(Math.PI / 2, 0, Math.PI / 2, "YXZ");
    // targetQuat.current.setFromEuler(tempEuler.current);
    // groupRef.current.quaternion.copy(targetQuat.current);
  }, []);

  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;

    // ---------- Hover / interaction behavior ----------
    if (isHovering && mousePosition && !isDragging) {
      // compute target rotations based on mouse (more subtle mapping)
      const targY = mousePosition.x * 0.6; // yaw from mouse.x
      const targX = mousePosition.y * 0.25; // pitch from mouse.y

      // set target Euler (order Y then X)
      tempEuler.current.set(targX, targY, 0, "YXZ");
      targetQuat.current.setFromEuler(tempEuler.current);

      // slerp towards the target quaternion for smooth motion
      g.quaternion.slerp(targetQuat.current, 0.15);

      // subtle floating while hovering
      const floatY = Math.sin(state.clock.elapsedTime * 2.5) * 0.06;
      g.position.y += (floatY - g.position.y) * 0.12;

      // scale up slightly while hovering (preserve proportions)
      const currentScale = g.scale.x;
      const targetScale = scale[0] * 1.08; // use uniform scalar for simplicity
      const newScale = currentScale + (targetScale - currentScale) * 0.12;
      g.scale.setScalar(newScale);
      return;
    }

    // ---------- Not hovering (or dragging) ----------
    // gently return rotation X to 0 and position/scale to neutral while still allowing auto-spin
    if (!isHovering && !isDragging) {
      // restore pitch (X) toward 0 by slerping to a quaternion with X=0 but keep current Y
      // We'll create a target quaternion with X=0 but preserving current Y angle:
      const currentEuler = new THREE.Euler().setFromQuaternion(
        g.quaternion,
        "YXZ"
      );
      tempEuler.current.set(0, currentEuler.y, 0, "YXZ");
      targetQuat.current.setFromEuler(tempEuler.current);
      // slerp small amount toward an upright orientation on X and Z
      g.quaternion.slerp(targetQuat.current, 0.06);

      // restore position.y toward zero
      g.position.y += (0 - g.position.y) * 0.06;

      // restore scale to original
      const currentScale = g.scale.x;
      const targetScale = scale[0];
      g.scale.setScalar(currentScale + (targetScale - currentScale) * 0.06);
    }

    // ---------- Auto rotation around local Y ----------
    // Only rotate when NOT interacting (your controls will set isUserInteracting)
    if (!isUserInteracting) {
      // make an incremental quaternion representing a small rotation around local up
      incrementalQuat.current.setFromAxisAngle(
        localUp,
        autoRotationSpeed * delta
      );
      // multiply on the right to rotate in local space
      g.quaternion.multiply(incrementalQuat.current);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <Center>
        <mesh
          ref={meshRef}
          geometry={nodes.Cube002.geometry}
          material={bearMaterial}
          // remove odd offsets so model is centered — keep non-uniform scale as you had
          // if you prefer a uniform scalar: scale={[scaleScalar, scaleScalar, scaleScalar]}
          scale={scale}
          castShadow
          receiveShadow
        />
      </Center>
    </group>
  );
}

/**
 * Scene (lighting + controls)
 */
function BearScene({ isDarkMode }) {
  const { camera } = useThree();
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    camera.position.set(0, 0, 4);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      {/* Balanced lighting: hemisphere (soft fill), key directional for contrast, front point to avoid black faces */}
      <hemisphereLight
        skyColor={isDarkMode ? "#ffffff" : "#ffffff"}
        groundColor={isDarkMode ? "#222222" : "#888888"}
        intensity={0.6}
      />
      {/* Gentle ambient so shadows aren't fully black */}
      <ambientLight intensity={0.25} />

      {/* Key directional light (corner) for the look you liked */}
      <directionalLight
        castShadow
        position={[5, 6, 2]}
        intensity={1.1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color={isDarkMode ? "#D0FC2D" : "#B66613"}
      />

      {/* Front point light so the face remains lit when oriented toward camera */}
      <pointLight
        position={[0, 1.5, 3]}
        intensity={0.9}
        distance={10}
        decay={2}
      />

      {/* Small rim/back light for silhouette */}
      <directionalLight position={[-3, 2, -2]} intensity={0.25} />

      <Environment preset="studio" />

      {/* The model - centered and slightly lowered so it sits nicely */}
      <BearModel
        isDarkMode={isDarkMode}
        isUserInteracting={isUserInteracting}
        position={[0, -0.7, 0]}
        scale={[0.222, 1.5, 1.5]}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={2.5}
        maxDistance={8}
        maxPolarAngle={Math.PI * 0.9}
        minPolarAngle={Math.PI * 0.1}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => {
          // small timeout so natural dragging doesn't immediately resume rotation
          setTimeout(() => setIsUserInteracting(false), 300);
        }}
        dampingFactor={0.08}
        enableDamping
      />
    </>
  );
}

/**
 * Top-level component
 */
const BasicBear = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // read dark class on document
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 60 }}>
        <BearScene isDarkMode={isDarkMode} />
      </Canvas>

      <div className="absolute bottom-4 right-4 text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-black/80 px-3 py-1 rounded-full backdrop-blur-sm">
        Drag to interact
      </div>
    </div>
  );
};

export default BasicBear;

// preload model for performance
useGLTF.preload("/models/bear-plain.glb");
