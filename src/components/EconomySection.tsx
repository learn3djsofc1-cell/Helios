import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei';

function SectionBlob() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh scale={2.4}>
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

export default function EconomySection() {
  return (
    <section id="how-it-works" className="relative z-10 border-t border-white/10 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - 3D Blob */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center order-2 lg:order-1"
          >
            <div className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%] pointer-events-none">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
                <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
                <SectionBlob />
                <Environment preset="studio" />
              </Canvas>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="relative z-10 lg:pl-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center px-5 py-1.5 rounded-full border border-[#50FDC0]/50 mb-8"
            >
              <span className="text-sm font-medium text-[#50FDC0]">How it works</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white leading-[1.1] mb-6"
            >
              From Intent to Execution
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Agents send high-level instructions, and Helios compiles those into an execution plan, handles cross-chain routing, executes transactions with batching and gas optimization, and returns cryptographic receipts and real-time analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12 max-w-xl"
            >
              {[
                '1. Connect', '2. Define', '3. Simulate',
                '4. Execute', '5. Audit', 'Streaming Telemetry',
                'Exportable Reports'
              ].map((tag) => (
                <div key={tag} className="px-5 py-2.5 rounded-full border border-white/10 bg-[#0A0A0A] text-sm text-gray-400 hover:text-gray-300 hover:border-white/20 transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-medium text-base hover:bg-gray-100 transition-colors">
                View Agent SDKs
              </button>
              <button className="w-full sm:w-auto text-white font-medium text-base hover:text-gray-300 transition-colors flex items-center justify-center gap-2">
                Read Documentation <span className="text-xl leading-none">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
