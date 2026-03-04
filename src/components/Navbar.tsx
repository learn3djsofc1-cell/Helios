import { useState } from 'react';
import { Send, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="14" width="22" height="22" rx="6" stroke="#50FDC0" strokeWidth="6" />
                <rect x="14" y="52" width="22" height="22" rx="6" stroke="#50FDC0" strokeWidth="6" />
                <rect x="52" y="14" width="22" height="60" rx="6" stroke="#50FDC0" strokeWidth="6" />
                <line x1="36" y1="44" x2="52" y2="44" stroke="#50FDC0" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-white font-semibold text-xl tracking-tight">Helios</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#core-features" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a>
            <a href="#applications" className="hover:text-white transition-colors">Use Cases</a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 text-gray-400">
            <a href="https://x.com/HeliosCoreX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white border border-white/20 rounded-full px-5 py-2 hover:bg-white/10 transition-colors font-medium whitespace-nowrap">
              Launch App
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#core-features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">Capabilities</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">How it works</a>
              <a href="#infrastructure" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">Infrastructure</a>
              <a href="#applications" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">Use Cases</a>
              
              <div className="h-px w-full bg-white/10 my-2"></div>
              
              <div className="flex flex-col gap-4">
                <a href="#" className="text-lg text-black bg-white rounded-full px-5 py-3 hover:bg-gray-200 transition-colors font-medium text-center">
                  Launch App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
