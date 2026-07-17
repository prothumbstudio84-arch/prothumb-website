import { motion } from "framer-motion";
import { Zap, Clock, Crosshair, Globe, ArrowRight } from "lucide-react";

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#090909] pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Ghost text background */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span 
          className="font-display font-black whitespace-nowrap opacity-10"
          style={{ 
            fontSize: "22vw", 
            color: "transparent", 
            WebkitTextStroke: "1.5px rgba(255,107,0,0.8)",
            lineHeight: 0.8
          }}
        >
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center xl:items-start max-w-7xl mx-auto w-full">
        {/* Left Content Column */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-lg flex flex-col items-center xl:items-start text-center xl:text-left mt-8"
        >
          {/* Pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center xl:justify-start gap-3 mb-8">
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/60">
              Graphic Designer
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/60">
              Thumbnail Creator
            </span>
          </motion.div>

          <motion.h3 variants={fadeUp} className="font-script text-3xl text-primary mb-2">
            welcome to
          </motion.h3>

          <motion.h1 variants={fadeUp} className="font-display font-black text-[80px] leading-[0.9] uppercase text-white mb-6">
            PROTHUMB<br />STUDIO
          </motion.h1>

          <motion.h2 variants={fadeUp} className="font-sans font-bold text-xl uppercase text-primary mb-6">
            GRAPHIC DESIGNER &<br />THUMBNAIL CREATOR
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">
            I create eye-catching thumbnails and stunning visual designs that help creators stand out. Passionate about clean aesthetics, bold compositions, and pixel-perfect details that drive clicks and engagement.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center xl:justify-start gap-4 mb-8">
            <a href="#projects" className="bg-primary hover:bg-primary/90 text-white px-7 py-3.5 rounded font-bold text-sm transition-colors flex items-center gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded font-bold text-sm text-white/70 hover:text-white transition-colors">
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-2 text-white/50">
            <Globe className="w-4 h-4" />
            <span className="text-xs tracking-widest uppercase">Available Worldwide</span>
          </motion.div>
        </motion.div>

        {/* Device Mockup & Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mt-24 xl:mt-12 flex flex-col items-center"
        >
          {/* Mockups */}
          <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] flex justify-center items-end mb-16">
            {/* Phone (left, behind, tilted) */}
            <div className="absolute left-4 md:left-12 bottom-0 w-[120px] md:w-[160px] h-[240px] md:h-[320px] bg-[#050505] border border-white/10 rounded-3xl -rotate-12 z-0 overflow-hidden shadow-2xl flex flex-col">
               <div className="h-6 w-full flex justify-center pt-2"><div className="w-1/3 h-1.5 bg-white/10 rounded-full" /></div>
               <div className="flex-1 m-2 mt-0 rounded-2xl overflow-hidden">
                  <img src="/nexora-brand.png" alt="Nexora Labs Brand" className="w-full h-full object-cover" />
               </div>
            </div>

            {/* Laptop (center, front) */}
            <div className="relative z-10 w-[280px] md:w-[480px] flex flex-col items-center">
              <div className="w-[90%] h-[180px] md:h-[280px] bg-[#0a0a0a] border-2 border-white/10 rounded-t-xl overflow-hidden relative shadow-2xl flex flex-col">
                <div className="h-3 w-full flex justify-center items-center"><div className="w-1 h-1 bg-white/20 rounded-full" /></div>
                <div className="flex-1 m-2 mt-0 rounded border border-white/5 overflow-hidden">
                  <img src="/nexora-brand.png" alt="Nexora Labs Brand" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Laptop base */}
              <div className="w-full h-4 md:h-6 bg-[#111] border-t border-white/20 rounded-b-xl relative shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 md:h-1.5 bg-white/10 rounded-b-md" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: Zap, title: "High CTR Designs", desc: "Thumbnails optimized for maximum click-through rates" },
              { icon: Clock, title: "Fast Delivery", desc: "Professional designs delivered on schedule, every time" },
              { icon: Crosshair, title: "Premium Quality", desc: "Pixel-perfect visuals crafted with attention to detail" },
              { icon: Globe, title: "Worldwide Service", desc: "Working with creators and brands across the globe" },
            ].map((feature, i) => (
              <div key={i} className="bg-[#111] border border-white/8 rounded-lg p-6 flex flex-col items-start hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
