import { motion } from "framer-motion";
import { useState } from "react";

export function FAQ() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const faqs = [
    {
      q: "What services do you offer?",
      a: "Thumbnail design, logo design, banner design, and social media graphics."
    },
    {
      q: "How does the design process work?",
      a: "We start with understanding your goals, then research, design, refine, and deliver final files."
    },
    {
      q: "What is your turnaround time?",
      a: "Most projects are delivered within 24-48 hours depending on complexity."
    },
    {
      q: "What files will I receive?",
      a: "High-resolution PNG, PSD/source files, and any requested format variations."
    },
    {
      q: "Do you offer revisions?",
      a: "Yes! We include revision rounds with every package."
    },
    {
      q: "How do I get started?",
      a: "Simply click \"Get Started\" or contact us via email or Instagram."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-center mb-16 w-full"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/60 mb-6">
            FAQ
          </span>
          <h2 className="font-display font-black text-5xl uppercase text-white">
            FREQUENTLY ASKED
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, idx }: { faq: any, idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="border-b border-white/8 py-5 w-full"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-white font-medium group-hover:text-primary transition-colors">
          {faq.q}
        </span>
        <span className={`text-white text-xl transition-transform duration-300 ${isOpen ? "rotate-45 text-primary" : ""}`}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[200px] mt-3" : "max-h-0"}`}
      >
        <p className="text-white/50 text-sm leading-relaxed pr-8">
          {faq.a}
        </p>
      </div>
    </motion.div>
  );
}
