import { motion } from "framer-motion";

export function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/60 mb-6">
            TESTIMONIALS
          </span>
          <h2 className="font-display font-black text-5xl uppercase text-white">
            CLIENT REVIEWS
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-2xl w-full flex flex-col items-center text-center"
        >
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-xl">★</span>
            ))}
          </div>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
            "Great communication throughout the process. They really understood what I wanted and delivered thumbnails that perfectly match my channel aesthetic."
          </p>

          <div className="flex flex-col items-center">
            <h4 className="font-bold text-white mb-1">Client Review</h4>
            <span className="text-primary text-sm">YouTuber</span>
          </div>
          
          {/* Dots */}
          <div className="flex items-center gap-2 mt-12">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
