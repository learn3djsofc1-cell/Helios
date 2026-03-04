import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center px-5 py-1.5 rounded-full border border-[#00FF94]/50 mb-8"
            >
              <span className="text-sm font-medium text-[#00FF94]">Key Features</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white leading-[1.1] mb-6"
            >
              Built for reliability,<br />observability, and compliance.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Capital never idles, strategies adapt to market conditions automatically, and every action is auditable. Export and restore encrypted strategy state for continuity without exposing secrets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12 max-w-xl"
            >
              {[
                'Agent-Native Deployment', 'Autonomous Execution', 'Cross-Chain Routing',
                'Risk Controls', 'Immutable Receipts', 'Encrypted Snapshots',
                'Real-Time Analytics'
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
                Launch Console
              </button>
              <button className="w-full sm:w-auto text-white font-medium text-base hover:text-gray-300 transition-colors flex items-center justify-center gap-2">
                Agent SDKs <span className="text-xl leading-none">→</span>
              </button>
            </motion.div>
          </div>

          {/* Right Content - Sandbox UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-8"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#50FDC0]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#50FDC0]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="text-sm text-gray-400 font-medium">Helios Console</div>
              </div>

              {/* Sandbox Controls */}
              <div className="px-5 pb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
                <button className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-[#0F0F0F] text-sm text-gray-300 hover:bg-white/5 transition-colors">
                  Strategy: Rebalance <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                
                <div className="flex p-1 rounded-xl bg-black border border-white/5 w-full sm:w-auto overflow-x-auto">
                  <button className="px-4 py-1.5 rounded-lg bg-[#1A1A1A] text-sm text-white font-medium whitespace-nowrap">Simulate</button>
                  <button className="px-4 py-1.5 rounded-lg text-sm text-gray-500 hover:text-white transition-colors whitespace-nowrap">Deploy</button>
                  <button className="px-4 py-1.5 rounded-lg text-sm text-gray-500 hover:text-white transition-colors whitespace-nowrap">Logs</button>
                </div>
              </div>

              {/* Sandbox Body */}
              <div className="h-[340px] flex items-center justify-center p-6">
                <p className="text-sm text-gray-500 text-center max-w-[320px] leading-relaxed">
                  Agent command - “rebalance treasury: lower SOL to 20%, allocate 60% to USDC yield” → Helios computes trades, selects aggregator, queues 3 transactions, executes, and returns receipts.
                </p>
              </div>

              {/* Sandbox Input */}
              <div className="p-5">
                <div className="relative mb-4">
                  <input 
                    type="text" 
                    placeholder="Type instruction..." 
                    className="w-full bg-black border border-white/5 rounded-full px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-[#0F0F0F]">
                    <div className="w-2 h-2 rounded-full bg-[#00FF94]"></div>
                    <span className="text-sm text-gray-300">executeStrategy()</span>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-2 rounded-full border border-white/10 bg-[#0F0F0F] text-sm text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
