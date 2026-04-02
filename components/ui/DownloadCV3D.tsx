"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function DownloadIcon() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={group} scale={0.8}>
        {/* Core block representing a document/crystal */}
        <mesh position={[0, 0, 0]} scale={[1.4, 1.8, 0.2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial 
            color="#8a2be2" 
            roughness={0.2}
            metalness={0.9}
            clearcoat={1}
            transmission={0.4}
            transparent={true}
            opacity={0.9}
          />
        </mesh>
        
        {/* Data Lines representing code or CV structure */}
        <mesh position={[0, 0.4, 0.15]} scale={[1, 0.1, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, 0.1, 0.15]} scale={[1, 0.1, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.25, -0.2, 0.15]} scale={[0.5, 0.1, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.5} />
        </mesh>
        
        {/* Floating Wireframe Box */}
        <mesh position={[0, 0, 0]} scale={[1.5, 1.9, 0.3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#00f0ff" wireframe={true} transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

export default function DownloadCV3D() {
  return (
    <div className="w-full h-[250px] relative">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }} className="pointer-events-none">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[0, 0, 2]} intensity={2} color="#00f0ff" />
        
        <DownloadIcon />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
