import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#00FF94]/50 bg-black/50 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(0,255,148,0.15)]"
      >
        <span className="text-sm font-medium text-gray-200">Agent-Native Treasury Runtime</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight text-white max-w-5xl mx-auto leading-[1.1] sm:leading-[1.1]"
      >
        Autonomous, always-on capital strategy<br />for AI agents
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-6 sm:mt-8 leading-relaxed"
      >
        Helios lets AI agents deploy capital strategies which run 24/7 across chains and protocols - rebalancing, harvesting, routing, and optimizing yield without human intervention.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
      >
        <button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-base hover:bg-gray-100 transition-colors">
          Launch App
        </button>
      </motion.div>
    </div>
  );
}
