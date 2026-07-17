import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Settings, Send } from "lucide-react";

export function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skills = [
    "Photoshop", "Photopea", "PicsArt", "Canva", "InShot",
    "Branding", "Thumbnail Design", "Social Media Design", "UI Design"
  ];

  const processSteps = [
    { id: "01", title: "DISCOVER", icon: Search, desc: "Understanding your goals, audience, and project requirements." },
    { id: "02", title: "RESEARCH", icon: Lightbulb, desc: "Analyzing trends, competitors, and creative direction for your niche." },
    { id: "03", title: "DESIGN", icon: PenTool, desc: "Crafting visual concepts with maximum impact and clarity." },
    { id: "04", title: "REFINE", icon: Settings, desc: "Polishing details, adjusting colors, and perfecting composition." },
    { id: "05", title: "DELIVER", icon: Send, desc: "Final exports in all formats with source files included." },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left: Skills & Tools */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            SKILLS & TOOLS
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span 
                key={i}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Work Process */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            WORK PROCESS
          </h2>
          <div className="flex flex-col mb-12">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-6 relative pb-8 last:pb-0">
                {/* Icon & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 z-10">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  {i !== processSteps.length - 1 && (
                    <div className="w-px h-full bg-white/10 absolute top-8 left-4 -translate-x-1/2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex flex-col pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-primary text-sm font-bold">{step.id}</span>
                    <h3 className="text-white font-bold uppercase text-base">{step.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-white/50 text-sm mb-4 text-center sm:text-left">Ready to bring your ideas to life?</p>
            <button className="bg-primary hover:bg-primary/90 text-white rounded px-8 py-4 font-bold text-sm transition-colors flex items-center gap-2 uppercase tracking-widest">
              START A PROJECT <Send className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
