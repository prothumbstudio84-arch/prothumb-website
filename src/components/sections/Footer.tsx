import { Instagram, PenTool, Figma } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white">SOCIAL</h4>
            <div className="w-8 h-0.5 bg-primary mt-2 mb-4" />
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Behance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dribbble</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white">SERVICES</h4>
            <div className="w-8 h-0.5 bg-primary mt-2 mb-4" />
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li>Thumbnail Design</li>
              <li>Logo Design</li>
              <li>Banner Design</li>
              <li>Social Media</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white">NAVIGATE</h4>
            <div className="w-8 h-0.5 bg-primary mt-2 mb-4" />
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display font-black text-6xl text-white/8 leading-[0.85] mb-4">
              PROTHUMB<br />STUDIO
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Graphic Designer & Thumbnail Creator</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <PenTool className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Figma className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-white/30">© 2026 Prothumb Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
