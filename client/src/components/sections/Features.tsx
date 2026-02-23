import { motion } from "framer-motion";
import { BookOpen, Compass, Library, Zap } from "lucide-react";

const features = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Structured Learning Paths",
    description: "No more guessing what to learn next. Follow carefully curated pathways that build intuition step-by-step.",
    color: "from-[hsl(358_100%_73%)]/20 to-transparent",
    iconColor: "text-[hsl(358_100%_73%)]"
  },
  {
    icon: <Library className="h-6 w-6" />,
    title: "Built-in Lexicon",
    description: "Instantly clarify technical terms without breaking your focus. Our lexicon is integrated directly into your learning flow.",
    color: "from-[hsl(264_100%_62%)]/20 to-transparent",
    iconColor: "text-[hsl(264_100%_62%)]"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Concept Clarity",
    description: "We prioritize deep understanding over superficial content overload. Master the 'why' before the 'how'.",
    color: "from-blue-500/20 to-transparent",
    iconColor: "text-blue-400"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Interactive Experience",
    description: "Active learning through guided experiences. Don't just watch. Interact, experiment, and build intuition.",
    color: "from-amber-500/20 to-transparent",
    iconColor: "text-amber-400"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[hsl(264_100%_62%)]/5 -skew-y-6 transform-gpu -z-10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Engineered for <br />
                <span className="text-[hsl(358_100%_73%)]">Deep Learning.</span>
              </h2>
              <p className="text-foreground/70 mb-8 text-lg">
                MLera provides the tools and environment necessary to transition from a passive spectator to an active practitioner.
              </p>
              
              {/* Abstract decorative element representing structure */}
              <div className="w-full h-48 rounded-xl border border-white/10 bg-white/5 p-6 relative overflow-hidden hidden md:block glass-card">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(264_100%_62%)]/20 to-transparent opacity-50" />
                <div className="space-y-3 relative z-10">
                  <div className="h-2 w-1/3 bg-[hsl(358_100%_73%)] rounded-full" />
                  <div className="h-2 w-2/3 bg-[hsl(264_100%_62%)] rounded-full" />
                  <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.color} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`mb-6 ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
