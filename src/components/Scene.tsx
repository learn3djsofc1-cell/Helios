import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function Blob() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#0a0a0a"
          envMapIntensity={1}
          clearcoat={0.2}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.3}
          distort={0.5}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
        <Blob />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
