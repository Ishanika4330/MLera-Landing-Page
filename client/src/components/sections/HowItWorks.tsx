import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Start with structured intuition. Understand the 'why' behind the math before seeing the code.",
    color: "text-[hsl(358_100%_73%)]",
    borderColor: "border-[hsl(358_100%_73%)]"
  },
  {
    number: "02",
    title: "Interact",
    description: "Engage with guided visualizations and use our built-in lexicon to clarify terms instantly.",
    color: "text-[hsl(264_100%_62%)]",
    borderColor: "border-[hsl(264_100%_62%)]"
  },
  {
    number: "03",
    title: "Master",
    description: "Solidify your knowledge by applying concepts in structured pathways designed for serious learners.",
    color: "text-white",
    borderColor: "border-white/20"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The Learning Flow
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A linear, distraction-free journey from absolute beginner to confident practitioner.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(358_100%_73%)] via-[hsl(264_100%_62%)] to-white/20 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[hsl(262_45%_15%)]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-background border-2 ${step.borderColor} flex items-center justify-center mb-6 shadow-xl`}>
                  <span className={`text-2xl font-bold font-heading ${step.color}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
