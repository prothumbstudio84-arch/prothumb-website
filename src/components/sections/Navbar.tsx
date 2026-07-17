import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#090909]/90 backdrop-blur-md border-b border-white/8 px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-primary bg-white flex items-center justify-center overflow-hidden">
          <img src="/logo.png" alt="ProThumb.Studio logo" className="w-8 h-8 object-contain" />
        </div>
        <span className="font-sans font-bold text-sm text-white">ProThumb.Studio</span>
      </div>

      {/* Center: Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {["Projects", "Pricing", "Skills", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right: Availability */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] tracking-widest font-bold text-white uppercase hidden sm:block">
          Available
        </span>
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
    </nav>
  );
}
