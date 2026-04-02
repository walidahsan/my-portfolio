"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Icosahedron() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={mesh} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial 
          color="#00f0ff" 
          roughness={0.2}
          metalness={0.9}
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      
      <mesh ref={mesh} scale={1.4}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#8a2be2" 
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Planetary Orbit Ring */}
      <mesh rotation-x={Math.PI / 2} scale={2.8}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
      </mesh>
      
      {/* Secondary Orbit Ring */}
      <mesh rotation-x={Math.PI / 3} rotation-y={Math.PI / 4} scale={3.2}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#8a2be2" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function FloatingShapes() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={5} color="#00f0ff" />
      <Icosahedron />
      <Sparkles count={300} scale={15} size={2} speed={0.2} opacity={0.5} color="#00f0ff" />
      <Environment preset="city" />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <color attach="background" args={["#030303"]} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
