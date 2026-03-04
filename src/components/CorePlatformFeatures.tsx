import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Network, Zap, ShieldAlert, FileKey, Key } from 'lucide-react';

const features = [
  {
    icon: <Terminal className="w-5 h-5 text-gray-300" />,
    title: "Agent-Native API",
    description: "REST and WebSocket endpoints designed specifically for LLM tool-calling.",
    label: "CORE PLATFORM"
  },
  {
    icon: <Network className="w-5 h-5 text-gray-300" />,
    title: "Cross-Chain Routing",
    description: "Abstracted bridging and swapping across Solana, Ethereum, Base, and Arbitrum.",
    label: "CORE PLATFORM"
  },
  {
    icon: <Zap className="w-5 h-5 text-gray-300" />,
    title: "Yield Optimization",
    description: "Automated harvesting and compounding across major DeFi protocols (Aave, Kamino, Jupiter).",
    label: "CORE PLATFORM"
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-gray-300" />,
    title: "Risk Engine",
    description: "Configurable circuit breakers, max drawdown limits, and slippage protection.",
    label: "CORE PLATFORM"
  },
  {
    icon: <FileKey className="w-5 h-5 text-gray-300" />,
    title: "Crypto Receipts",
    description: "Every execution returns a verifiable hash and state diff for the agent's memory.",
    label: "CORE PLATFORM"
  },
  {
    icon: <Key className="w-5 h-5 text-gray-300" />,
    title: "Multi-Sig Execution",
    description: "Require multiple agent approvals for high-value transactions or critical protocol changes.",
    label: "CORE PLATFORM"
  }
];

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <div 
      className="relative w-full h-[320px] cursor-pointer group mt-8"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Back Folder */}
      <div className="absolute inset-0 z-0">
        {/* Tab */}
        <div className="w-[45%] h-10 bg-[#151515] rounded-t-xl border-t border-l border-r border-white/5 absolute top-0 left-0"></div>
        {/* Body */}
        <div className="absolute top-9 inset-x-0 bottom-0 bg-[#151515] rounded-2xl rounded-tl-none border border-white/5"></div>
      </div>
      
      {/* White Card */}
      <div 
        className={`absolute left-3 right-3 top-10 bottom-4 bg-[#F4F4F5] rounded-xl z-10 p-6 shadow-xl flex flex-col border border-white/20 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${isExpanded ? '-translate-y-[130px]' : 'md:group-hover:-translate-y-[130px]'}`}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-gray-500 font-semibold tracking-wider uppercase pr-4 leading-relaxed">
            {feature.title} // {formattedIndex}
          </span>
          <div className="flex gap-1 shrink-0 mt-1">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
        </div>
        <div>
          <p className="text-black font-medium leading-relaxed text-sm">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Front Folder */}
      <div className="absolute top-14 inset-x-0 bottom-0 bg-[#1E1E1E] rounded-2xl z-20 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col transition-colors group-hover:bg-[#222222]">
        <div className="flex justify-between items-start mb-auto">
          <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-transparent">
            {feature.icon}
          </div>
          <span className="text-5xl font-bold text-white/5 font-mono">
            {formattedIndex}
          </span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-white/10"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
              {feature.label}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-200 tracking-wide uppercase font-mono">
            {feature.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function CorePlatformFeatures() {
  return (
    <section id="core-features" className="relative z-10 border-t border-white/10 bg-black py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-[#00FF94]/50 mb-8">
            <span className="text-sm font-medium text-[#00FF94]">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white leading-[1.1]">
            Core Platform Features
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
