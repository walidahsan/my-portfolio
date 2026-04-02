"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Knot() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.1;
      mesh.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={mesh} scale={0.9}>
        <torusKnotGeometry args={[1, 0.3, 128, 64]} />
        <meshPhysicalMaterial 
          color="#00f0ff" 
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
        />
      </mesh>
    </Float>
  );
}

export default function Skills3D() {
  return (
    <div className="w-full h-[400px] md:h-full min-h-[400px] cursor-grab active:cursor-grabbing border border-white/5 rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm relative">
      <div className="absolute top-4 right-4 z-10 text-xs font-mono text-zinc-500 bg-black/40 px-3 py-1 rounded-full border border-white/10 pointer-events-none">
        Interactive 3D | Drag to Rotate
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={5} color="#8a2be2" />
        
        <Knot />
        
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#00f0ff" />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
}
