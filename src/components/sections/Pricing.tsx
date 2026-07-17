import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const plans = [
    {
      title: "Thumbnail Design",
      label: "PER THUMBNAIL",
      price: "₹149",
      popular: true,
      features: [
        "Custom YouTube thumbnail design",
        "High-resolution PNG & PSD files",
        "Click-optimized composition",
        "2 revision rounds",
        "24-hour delivery"
      ]
    },
    {
      title: "Logo Design",
      label: "PER LOGO",
      price: "₹449",
      popular: false,
      features: [
        "Professional logo design",
        "Multiple concept options",
        "Vector AI EPS PNG SVG files",
        "Unlimited revisions",
        "Brand color palette included"
      ]
    },
    {
      title: "Banner Design",
      label: "PER BANNER",
      price: "₹349",
      popular: false,
      features: [
        "YouTube/Social media banner",
        "Full HD resolution",
        "Source files included",
        "3 revision rounds",
        "48-hour delivery"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-white/60 mb-6">
            PRICING
          </span>
          <h2 className="font-display font-black text-5xl uppercase text-white mb-4">
            SIMPLE PRICING
          </h2>
          <p className="text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            Transparent pricing with no hidden fees. Quality design that fits your budget.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }, hidden: { opacity: 0, y: 20 } }}
              className="relative bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              {plan.popular && (
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={`mt-${plan.popular ? '8' : '0'} mb-6`}>
                <h3 className="font-bold text-xl text-white mb-1">{plan.title}</h3>
                <div className="text-xs text-primary uppercase tracking-widest font-bold mb-4">{plan.label}</div>
                <div className="font-display font-black text-6xl text-white">{plan.price}</div>
              </div>

              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded font-bold text-sm transition-colors ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5'}`}>
                Get Started →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
