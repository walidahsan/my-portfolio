"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls, ContactShadows, Html, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const orbitSkills = ["React.js", "Next.js", "Node.js", "MongoDB", "Express", "Django", "WebSockets", "AWS"];

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
      <mesh ref={mesh} scale={0.75}>
        <torusKnotGeometry args={[1, 0.3, 160, 32]} />
        <meshPhysicalMaterial
          color="#00f0ff"
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

// Skill labels orbiting the knot on a tilted ring
function SkillOrbit() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25;
  });

  return (
    <group rotation={[0.35, 0, 0.1]}>
      <group ref={group}>
        {orbitSkills.map((skill, i) => {
          const angle = (i / orbitSkills.length) * Math.PI * 2;
          return (
            <Html key={skill} center position={[Math.cos(angle) * 2.3, 0, Math.sin(angle) * 2.3]} zIndexRange={[10, 0]}>
              <span className="pointer-events-none select-none whitespace-nowrap rounded-full border border-[#00f0ff]/30 bg-black/70 px-2.5 py-1 font-mono text-[11px] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                {skill}
              </span>
            </Html>
          );
        })}
      </group>
    </group>
  );
}

export default function Skills3D() {
  return (
    <div className="relative w-full h-[420px] md:h-[480px] cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,240,255,0.1)]">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap text-xs font-mono text-zinc-400 bg-black/60 px-3 py-1 rounded-full border border-white/10 pointer-events-none">
        Interactive 3D · Drag to rotate
      </div>
      <Canvas camera={{ position: [0, 0.4, 6], fov: 45 }} className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={5} color="#8a2be2" />

        <Knot />
        <SkillOrbit />
        <Sparkles count={60} scale={6} size={2} speed={0.3} opacity={0.4} color="#8a2be2" />

        <ContactShadows position={[0, -1.9, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#00f0ff" />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
