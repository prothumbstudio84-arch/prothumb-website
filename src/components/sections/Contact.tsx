import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 bg-[#090909] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left Content */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-md flex flex-col">
          <div className="font-black text-5xl lowercase text-white mb-2 flex items-center gap-4">
            let's work <span className="text-primary text-3xl">◆</span>
          </div>
          <div className="font-black text-5xl lowercase text-white mb-6">
            together
          </div>
          
          <p className="text-white/55 text-sm leading-relaxed mb-10">
            Currently open for new projects and collaborations. Let's create something amazing that drives results and makes your brand stand out.
          </p>

          <a href="mailto:hello@prothumb.studio" className="inline-flex items-center justify-between border border-white/30 hover:border-primary rounded-full px-6 py-3 text-sm font-medium text-white transition-colors w-fit gap-6 group mb-12">
            Available for Freelance
            <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-primary flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

        </motion.div>

        {/* Right Content - Visual Mockup/Ambiance */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full min-h-[400px] flex items-center justify-center"
        >
          {/* Radial glow to simulate warm office ambiance */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/5 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15)_0%,rgba(0,0,0,0.8)_100%)]" />
            
            {/* Abstract geometric shapes representing design */}
            <div className="relative z-10 w-48 h-48 border border-white/10 rounded-full flex items-center justify-center opacity-50">
              <div className="w-32 h-32 border border-primary/40 rounded-full flex items-center justify-center rotate-45">
                <div className="w-16 h-16 bg-primary/20 backdrop-blur-md rounded-lg rotate-12" />
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 text-white/20 font-display font-black text-6xl tracking-tighter opacity-30">
              STUDIO
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
