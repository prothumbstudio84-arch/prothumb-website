import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const projects = [
    {
      id: "01",
      title: "YouTube Thumbnails",
      category: "THUMBNAIL DESIGN",
      tag: "THUMBNAIL DESIGN",
      bgClass: "from-purple-900/40 to-black",
      previewText: "GAMES",
      previewColor: "text-primary text-glow-orange",
      image: "/thumbnail-youtube.png",
      aspectClass: "aspect-video"
    },
    {
      id: "02",
      title: "Brand Identity Kit",
      category: "BRANDING DESIGN",
      tag: "BRANDING DESIGN",
      bgClass: "from-[#1a1a1a] to-black",
      previewText: "BRAND",
      previewColor: "text-white",
      image: "/thumbnail-brand.png",
      aspectClass: "aspect-video"
    },
    {
      id: "03",
      title: "Social Media Graphics",
      category: "SOCIAL MEDIA DESIGN",
      tag: "SOCIAL MEDIA DESIGN",
      bgClass: "from-blue-900/30 to-black",
      previewText: "SOCIAL",
      previewColor: "text-blue-400",
      image: "/thumbnail-social.png",
      aspectClass: "aspect-[4/5]"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/60 mb-6">
              SELECTED WORK
            </span>
            <h2 className="font-display font-black text-5xl uppercase text-white">
              SELECTED PROJECTS
            </h2>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-3 text-sm font-bold transition-colors flex items-center gap-2 whitespace-nowrap">
            VIEW ALL PROJECTS <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Project Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }, hidden: { opacity: 0, y: 20 } }}
              className={`group relative rounded-xl overflow-hidden bg-[#111] border border-white/8 ${proj.aspectClass} flex flex-col`}
            >
              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white">
                  {proj.tag}
                </span>
              </div>
              
              {/* Image Area */}
              <div className={`flex-1 w-full bg-gradient-to-br ${proj.bgClass} flex items-center justify-center relative overflow-hidden transition-transform duration-700 group-hover:scale-105`}>
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
                    <span className={`font-display font-black text-6xl md:text-5xl lg:text-6xl ${proj.previewColor} rotate-[-10deg]`}>
                      {proj.previewText}
                    </span>
                  </>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project List */}
        <div className="flex flex-col w-full">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.id}
              href="#"
              initial="hidden" whileInView="visible" viewport={{ once: true }} 
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }, hidden: { opacity: 0, y: 10 } }}
              className="group flex items-center py-6 border-b border-white/8 hover:border-white/20 transition-colors"
            >
              <span className="text-primary font-display font-bold text-xl w-12">{proj.id}</span>
              <h3 className="text-white font-bold text-xl md:text-2xl flex-1 group-hover:translate-x-2 transition-transform flex items-center gap-2">
                {proj.title} <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <span className="text-white/40 text-xs md:text-sm font-bold tracking-widest uppercase hidden md:block group-hover:text-primary transition-colors">
                {proj.category}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
