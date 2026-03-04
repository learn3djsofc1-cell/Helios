import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Activity, RefreshCw, Briefcase } from 'lucide-react';

const applications = [
  {
    icon: <Building2 className="w-6 h-6 text-[#50FDC0]" />,
    title: "Autonomous Treasuries",
    description: "DAOs and AI agents managing their own runway and diversifying stables.",
    label: "USE CASE"
  },
  {
    icon: <Activity className="w-6 h-6 text-[#50FDC0]" />,
    title: "Yield-Seeking Swarms",
    description: "Multi-agent systems hunting for arbitrage and yield opportunities 24/7.",
    label: "USE CASE"
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#50FDC0]" />,
    title: "Automated Market Makers",
    description: "Agents providing concentrated liquidity and dynamically adjusting ranges.",
    label: "USE CASE"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#50FDC0]" />,
    title: "AI-Managed Portfolios",
    description: "Consumer-facing agents managing user funds based on natural language risk profiles.",
    label: "USE CASE"
  }
];

function ApplicationCard({ app, index }: { app: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative w-full h-[280px] cursor-pointer group ${isExpanded ? 'z-50' : 'hover:z-50 z-10'}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Back Folder (Red Tab) */}
      <div className="absolute inset-y-0 right-0 w-12 z-0 flex items-center justify-center">
        <div className="absolute inset-y-4 right-0 w-16 bg-[#50FDC0] rounded-r-2xl border border-white/10 shadow-lg">
          <div className="h-full w-full flex items-center justify-center">
             <span className="text-[10px] font-mono text-black/90 tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
                READ DETAILS
             </span>
          </div>
        </div>
      </div>
      
      {/* Description Card */}
      <div 
        className={`absolute bg-[#1E1E1E] rounded-xl z-10 p-5 shadow-2xl flex flex-col border border-white/20 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] 
        left-4 right-12 bottom-4 top-1/2
        md:left-auto md:w-[200px] md:top-4
        ${isExpanded ? 'translate-y-[130px] md:translate-y-0 md:translate-x-[180px]' : 'md:group-hover:translate-x-[180px]'}`}
      >
        <div className="h-full flex flex-col justify-end md:justify-center md:pl-12">
          <p className="text-gray-300 font-medium leading-relaxed text-sm">
            {app.description}
          </p>
        </div>
      </div>

      {/* Front White Card */}
      <div className="absolute inset-y-0 left-0 right-8 bg-[#F4F4F5] rounded-2xl z-20 p-6 shadow-[10px_0_40px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col transition-colors">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center">
            {app.icon}
          </div>
          <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
            {app.label}
          </span>
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-[#50FDC0] tracking-tight mb-4 font-mono leading-tight">
            {app.title}
          </h3>
          <div className="h-24 w-full rounded-xl bg-gradient-to-br from-[#50FDC0]/20 to-[#50FDC0]/10 border border-black/5 flex items-center justify-center overflow-hidden">
             <div className="w-full h-full opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RealWorldApplications() {
  return (
    <section id="applications" className="relative z-10 border-t border-white/10 bg-black pt-20 pb-40 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center px-5 py-1.5 rounded-full border border-[#50FDC0]/50 mb-8"
            >
              <span className="text-sm font-medium text-[#50FDC0]">Use Cases</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white leading-[1.1] mb-6"
            >
              Real-World Applications
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Helios powers the next generation of on-chain operations, from autonomous treasuries to consumer-facing AI portfolio managers.
            </motion.p>
          </div>

          {/* Right Content - Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pr-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <ApplicationCard app={app} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
