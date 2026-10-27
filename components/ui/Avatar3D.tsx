"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SKIN = "#c68b65";
const HAIR = "#15110f";
const BLAZER = "#1d2a4d";
const SHIRT = "#a9c8ec";
const FRAME = "#111111";

// Pointer position normalised to -1..1 across the whole window, so the head
// follows the cursor even when it isn't over the canvas.
const pointer = { x: 0, y: 0 };

function Head() {
  const head = useRef<THREE.Group>(null);
  const eyes = useRef<THREE.Group>(null);
  const nextBlink = useRef(2);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, pointer.x * 0.55, 4, delta);
      head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, pointer.y * 0.3, 4, delta);
    }
    // Occasional blink
    if (eyes.current) {
      const blinking = t > nextBlink.current && t < nextBlink.current + 0.12;
      eyes.current.scale.y = blinking ? 0.1 : 1;
      if (t > nextBlink.current + 0.12) nextBlink.current = t + 2 + Math.random() * 3;
    }
  });

  return (
    <group ref={head}>
      {/* Skull */}
      <mesh scale={[0.9, 1.08, 0.95]}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial color={SKIN} roughness={0.55} />
      </mesh>

      {/* Hair: cap plus a swept quiff on top */}
      <mesh scale={[0.93, 1.1, 0.98]} position={[0, 0.03, -0.02]} rotation={[-0.25, 0, 0]}>
        <sphereGeometry args={[1, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.34]} />
        <meshStandardMaterial color={HAIR} roughness={0.8} />
      </mesh>
      <mesh position={[0.05, 1.0, 0.1]} rotation={[0.2, 0, -0.1]} scale={[0.62, 0.24, 0.55]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={HAIR} roughness={0.8} />
      </mesh>

      {/* Ears */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * 0.88, 0.02, -0.05]} scale={[0.14, 0.24, 0.12]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color={SKIN} roughness={0.55} />
        </mesh>
      ))}

      {/* Eyebrows */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * 0.32, 0.36, 0.86]} rotation={[0, 0, s * -0.08]}>
          <boxGeometry args={[0.28, 0.06, 0.06]} />
          <meshStandardMaterial color={HAIR} />
        </mesh>
      ))}

      {/* Eyes */}
      <group ref={eyes} position={[0, 0.12, 0]}>
        {[-1, 1].map((s) => (
          <group key={s} position={[s * 0.32, 0, 0.82]}>
            <mesh scale={[1, 0.8, 0.6]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color="#f4f1ec" roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.07]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#1a120d" roughness={0.2} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Glasses */}
      <group position={[0, 0.12, 0]}>
        {[-1, 1].map((s) => (
          <mesh key={s} position={[s * 0.33, 0, 0.97]} scale={[1.08, 0.82, 1]}>
            <torusGeometry args={[0.24, 0.035, 12, 40]} />
            <meshStandardMaterial color={FRAME} metalness={0.4} roughness={0.3} />
          </mesh>
        ))}
        <mesh position={[0, 0.02, 0.99]}>
          <boxGeometry args={[0.16, 0.04, 0.04]} />
          <meshStandardMaterial color={FRAME} />
        </mesh>
        {[-1, 1].map((s) => (
          <mesh key={s} position={[s * 0.78, 0.02, 0.5]} rotation={[0, s * 0.35, 0]}>
            <boxGeometry args={[0.035, 0.035, 0.85]} />
            <meshStandardMaterial color={FRAME} />
          </mesh>
        ))}
      </group>

      {/* Nose */}
      <mesh position={[0, -0.08, 0.93]} scale={[0.12, 0.18, 0.14]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={SKIN} roughness={0.55} />
      </mesh>

      {/* Beard, moustache and mouth */}
      <mesh scale={[0.93, 1.1, 0.97]}>
        <sphereGeometry args={[1, 48, 48, Math.PI * 0.1, Math.PI * 0.8, Math.PI * 0.63, Math.PI * 0.37]} />
        <meshStandardMaterial color="#231a15" roughness={0.95} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.27, 0.92]} scale={[0.24, 0.05, 0.06]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={HAIR} roughness={0.9} />
      </mesh>
      <mesh position={[0, -0.38, 0.94]} scale={[0.15, 0.035, 0.04]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#7a3f33" roughness={0.5} />
      </mesh>
    </group>
  );
}

function Body() {
  return (
    <group position={[0, -1.15, 0]}>
      {/* Neck */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.36, 0.4, 0.6, 24]} />
        <meshStandardMaterial color={SKIN} roughness={0.55} />
      </mesh>
      {/* Shirt */}
      <mesh position={[0, -0.75, 0.25]} scale={[0.7, 0.75, 0.55]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={SHIRT} roughness={0.6} />
      </mesh>
      {/* Blazer */}
      <mesh position={[0, -1.25, 0]} scale={[1.75, 1.05, 0.95]}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial color={BLAZER} roughness={0.7} />
      </mesh>
      {/* Lapels */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * 0.3, -0.8, 0.72]} rotation={[0.2, 0, s * -0.38]}>
          <boxGeometry args={[0.24, 0.9, 0.08]} />
          <meshStandardMaterial color="#15203d" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function Avatar3D() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas camera={{ position: [0, -0.55, 7], fov: 30 }} dpr={[1, 2]} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      {/* Neon rim lights to match the site palette */}
      <pointLight position={[-4, 1, -2]} intensity={30} color="#00f0ff" />
      <pointLight position={[4, 1, -2]} intensity={30} color="#8a2be2" />
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
        <group position={[0, 0.35, 0]}>
          <Head />
          <Body />
        </group>
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}
