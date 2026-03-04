export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative">
            <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="14" width="22" height="22" rx="6" stroke="#50FDC0" strokeWidth="6" />
              <rect x="14" y="52" width="22" height="22" rx="6" stroke="#50FDC0" strokeWidth="6" />
              <rect x="52" y="14" width="22" height="60" rx="6" stroke="#50FDC0" strokeWidth="6" />
              <line x1="36" y1="44" x2="52" y2="44" stroke="#50FDC0" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Helios</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="https://x.com/HeliosCoreX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
