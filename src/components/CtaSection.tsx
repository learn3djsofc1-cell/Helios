import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function CtaBlob() {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh scale={3.8}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#050505"
          envMapIntensity={1}
          clearcoat={0.1}
          clearcoatRoughness={0.2}
          metalness={0.8}
          roughness={0.4}
          distort={0.5}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function CtaSection() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-black overflow-hidden py-24 lg:py-48">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
          <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
          <CtaBlob />
          <Environment preset="studio" />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="14" width="22" height="22" rx="6" stroke="#50FDC0" strokeWidth="6" />
              <rect x="14" y="52" width="22" height="22" rx="6" stroke="#50FDC0" strokeWidth="6" />
              <rect x="52" y="14" width="22" height="60" rx="6" stroke="#50FDC0" strokeWidth="6" />
              <line x1="36" y1="44" x2="52" y2="44" stroke="#50FDC0" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">Helios</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6"
        >
          Get Started with Helios
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Provision engine instances, configure risk profiles, and obtain sandbox keys today. Bring the 'always-on' reliability of backtestable infra to live on-chain capital operations.
        </motion.p>

        {/* CTA & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-medium text-base hover:bg-gray-100 transition-colors">
            Launch App
          </button>
        </motion.div>
      </div>
    </section>
  );
}
