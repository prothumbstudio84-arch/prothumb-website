import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RecentWork() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const works = [
    {
      title: "Gaming Thumbnail",
      badge: "THUMBNAIL DESIGN",
      bgClass: "from-purple-900 to-red-900/50",
      mockupText: "VS",
      mockupColor: "text-white text-glow-orange font-black",
      image: "/thumbnail-gaming.png"
    },
    {
      title: "Brand Logo Design",
      badge: "LOGO DESIGN",
      bgClass: "from-[#222] to-black",
      mockupText: "LOGO",
      mockupColor: "text-primary/80 font-bold",
      image: "/thumbnail-brand.png"
    },
    {
      title: "Channel Banner",
      badge: "BANNER DESIGN",
      bgClass: "from-[#0a0a0a] to-[#1a1a1a]",
      mockupText: "YO",
      mockupColor: "text-primary font-black text-[120px]",
      image: "/thumbnail-banner.jpg"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/60 mb-6">
              PORTFOLIO
            </span>
            <h2 className="font-display font-black text-5xl uppercase text-white">
              RECENT WORK
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }, hidden: { opacity: 0, y: 20 } }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className={`w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${work.bgClass} relative flex items-center justify-center`}>
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white">
                    {work.badge}
                  </span>
                </div>
                {/* Content */}
                {'image' in work && work.image ? (
                  <img src={work.image as string} alt={work.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className={`font-display relative z-0 transition-transform duration-700 group-hover:scale-110 ${work.mockupColor}`} style={{ fontSize: "5rem", lineHeight: 1 }}>
                    {work.mockupText}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-white text-base px-1 group-hover:text-primary transition-colors">
                {work.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
