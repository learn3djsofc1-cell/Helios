import { motion } from 'motion/react';
import { Sparkles, User, Code2, Eye, Database, Box, PlaySquare } from 'lucide-react';

export default function ModelsSection() {
  return (
    <section id="infrastructure" className="relative z-10 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-[#050505]">
          
          {/* Left Column - 14B Instruct */}
          <div className="lg:col-span-5 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-12 rounded-xl border border-[#2563EB] bg-[#2563EB]/10 flex items-center justify-center mb-8">
                <Sparkles className="w-6 h-6 text-[#3B82F6]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-6 tracking-tight">Security & Risk</h3>
              
              <p className="text-gray-400 leading-relaxed mb-12">
                Enforceable policies, circuit breakers, and deterministic simulation ensure capital is protected. Engine instances isolate tenants and strategy processes.
              </p>

              {/* Diagram */}
              <div className="relative h-48 sm:h-32 mb-12 flex items-center justify-between max-w-[300px] mx-auto lg:max-w-none lg:mx-0">
                {/* SVG Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Top Line */}
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    x1="48" y1="30%" x2="calc(100% - 48px)" y2="30%" 
                    stroke="#333" strokeWidth="2" className="sm:hidden" 
                  />
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    x1="48" y1="48" x2="calc(100% - 48px)" y2="48" 
                    stroke="#333" strokeWidth="2" className="hidden sm:block" 
                  />
                  {/* Bottom Line */}
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    x1="48" y1="70%" x2="calc(100% - 48px)" y2="70%" 
                    stroke="#1E3A8A" strokeWidth="2" className="sm:hidden" 
                  />
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    x1="48" y1="80" x2="calc(100% - 48px)" y2="80" 
                    stroke="#1E3A8A" strokeWidth="2" className="hidden sm:block" 
                  />
                </svg>

                {/* Labels */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-4 sm:gap-0" style={{ zIndex: 10 }}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-[#1A1A1A] border border-white/10 text-[10px] text-gray-400 px-3 py-1 rounded-full sm:mb-3 uppercase tracking-wider"
                  >
                    Strategy Spec
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="bg-[#1A1A1A] border border-white/10 text-[10px] text-gray-400 px-3 py-1 rounded-full uppercase tracking-wider"
                  >
                    Execution Receipt
                  </motion.div>
                </div>

                {/* Nodes */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/20 bg-[#0A0A0A] flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Agent</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative z-10 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl border border-[#2563EB] bg-[#2563EB]/10 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <Sparkles className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Policy Engine</span>
                </motion.div>
              </div>

              {/* Features List */}
              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-4 text-gray-300 text-sm">
                  <Code2 className="w-5 h-5 text-gray-500" />
                  Deterministic Simulation
                </li>
                <li className="flex items-center gap-4 text-gray-300 text-sm">
                  <Eye className="w-5 h-5 text-gray-500" />
                  Circuit Breakers
                </li>
                <li className="flex items-center gap-4 text-gray-300 text-sm">
                  <Database className="w-5 h-5 text-gray-500" />
                  Immutable Receipts
                </li>
              </ul>

              <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
                View Security Docs
              </button>
            </motion.div>
          </div>

          {/* Right Column - .5b Agentica */}
          <div className="lg:col-span-7 p-10 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl border border-[#50FDC0] bg-[#50FDC0]/10 flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-[#50FDC0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-6 tracking-tight">Infrastructure & Integrations</h3>
              
              <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
                Helios aggregates chains, aggregators, and DeFi building blocks into a single execution fabric so agents only specify strategy intent - Helios handles the rest.
              </p>

              {/* Diagram */}
              <div className="overflow-x-auto pb-4 mb-8 -mx-10 px-10 lg:mx-0 lg:px-0 lg:overflow-visible no-scrollbar">
                <div className="relative h-48 flex items-center min-w-[500px] lg:min-w-0">
                {/* SVG Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Left to Center Lines */}
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    x1="48" y1="88" x2="40%" y2="88" stroke="#333" strokeWidth="2" 
                  />
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    x1="48" y1="104" x2="40%" y2="104" stroke="#50FDC0" strokeWidth="2" 
                  />
                  
                  {/* Center to Right Lines (Curved) */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                    d="M 40% 88 C 55% 88, 60% 48, calc(100% - 140px) 48" fill="none" stroke="#333" strokeWidth="2" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
                    d="M 40% 104 C 55% 104, 60% 144, calc(100% - 140px) 144" fill="none" stroke="#50FDC0" strokeWidth="2" 
                  />
                </svg>

                {/* Left Node */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/20 bg-[#0A0A0A] flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Agent</span>
                </motion.div>

                {/* Center Node */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute left-[40%] -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl border border-[#50FDC0] bg-[#50FDC0]/10 flex items-center justify-center shadow-[0_0_15px_rgba(80,253,192,0.2)]">
                    <svg className="w-5 h-5 text-[#50FDC0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Helios</span>
                </motion.div>

                {/* Right Nodes */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute right-[80px] top-6 z-10 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/20 bg-[#0A0A0A] flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Chains</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="absolute right-[80px] bottom-6 z-10 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/20 bg-[#0A0A0A] flex items-center justify-center">
                    <Box className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Protocols</span>
                </motion.div>

                {/* Labels */}
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: 10 }}>
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="bg-[#1A1A1A] border border-white/10 text-[9px] text-gray-400 px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider"
                  >
                    Intent
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                    className="bg-[#1A1A1A] border border-white/10 text-[9px] text-gray-400 px-2 py-0.5 rounded-full uppercase tracking-wider"
                  >
                    Receipt
                  </motion.div>
                </div>

                <div className="absolute left-[60%] top-[35%] -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: 10 }}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                    className="bg-[#1A1A1A] border border-white/10 text-[9px] text-gray-400 px-2 py-0.5 rounded-full uppercase tracking-wider"
                  >
                    Route
                  </motion.div>
                </div>

                <div className="absolute left-[60%] top-[60%] -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: 10 }}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 2.3 }}
                    className="bg-[#1A1A1A] border border-white/10 text-[9px] text-gray-400 px-2 py-0.5 rounded-full uppercase tracking-wider"
                  >
                    Settle
                  </motion.div>
                </div>
              </div>
              </div>

              {/* Tags Grid */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
                {[
                  'Solana', 'Ethereum', 'Base',
                  'Aave', 'Kamino', 'Jupiter',
                  'OpenClaw', '8+ Chains'
                ].map((tag) => (
                  <div key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-[#0A0A0A] text-xs text-gray-400 hover:text-gray-300 hover:border-white/20 transition-colors cursor-default font-mono">
                    {tag}
                  </div>
                ))}
              </div>

              <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
                View Integrations
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
