import { motion } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Rethinking How You <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(358_100%_73%)] to-[hsl(264_100%_62%)]">
              Understand AI.
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            The machine learning ecosystem is flooded with scattered tutorials and shallow content. 
            MLera was built under IIIT Dharwad Research Park to solve this chaos with structure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="h-8 w-8 text-[hsl(358_100%_73%)]" />,
              title: "The Problem",
              description: "Learners get lost in passive video consumption, leading to the illusion of competence without real conceptual clarity."
            },
            {
              icon: <Target className="h-8 w-8 text-[hsl(264_100%_62%)]" />,
              title: "Our Solution",
              description: "We focus on concept clarity over content overload, using structured learning paths and an interactive lexicon."
            },
            {
              icon: <Users className="h-8 w-8 text-white" />,
              title: "Who It's For",
              description: "Beginners needing intuition, and serious learners wanting a powerful, structured path to mastery."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-heading">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
