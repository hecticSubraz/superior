"use client";

import { Suspense, useRef, useMemo, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeBuilding({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh>
        <boxGeometry args={[1, 2, 1]} />
        <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function Crane() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[3, -1, -2]}>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.08, 3, 0.08]} />
        <meshBasicMaterial color="#FF6B00" wireframe />
      </mesh>
      <mesh position={[1.5, 2.2, 0]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[3, 0.06, 0.06]} />
        <meshBasicMaterial color="#D4AF37" wireframe />
      </mesh>
      <mesh position={[2.5, 1.5, 0]}>
        <boxGeometry args={[0.04, 1.5, 0.04]} />
        <meshBasicMaterial color="#888888" wireframe />
      </mesh>
    </group>
  );
}

function FloatingParticles({ count = 30 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        scale: 0.02 + Math.random() * 0.03,
      })),
    [count]
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.scale, 4, 4]} />
          <meshBasicMaterial color="#FF6B00" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function BlueprintGrid() {
  return (
    <gridHelper args={[30, 30, "#FF6B00", "#1a1a1a"]} position={[0, -2, 0]} />
  );
}

function Scene({
  mouseRef,
}: {
  mouseRef: MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseRef.current.x * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseRef.current.y * 0.08,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <WireframeBuilding position={[-3, -1, -1]} scale={1.2} />
      <WireframeBuilding position={[-1, -1, -3]} scale={0.8} />
      <WireframeBuilding position={[1.5, -1, -2]} scale={1.5} />
      <WireframeBuilding position={[-4, -1, -4]} scale={0.6} />
      <Crane />
      <FloatingParticles />
      <BlueprintGrid />
    </group>
  );
}

export default function Hero3D() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    };
  };

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
