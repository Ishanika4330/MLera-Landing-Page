import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(264_100%_62%)]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[hsl(358_100%_73%)]/20 to-[hsl(264_100%_62%)]/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-16 text-center border-t border-[hsl(358_100%_73%)]/30 border-l border-[hsl(264_100%_62%)]/30"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to decode Machine Learning?
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Join MLera today and transform your learning journey from chaotic to structured.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 text-base bg-white text-[hsl(262_51%_12%)] hover:bg-gray-100 rounded-full font-semibold transition-transform hover:scale-105"
            >
              Join the Beta
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-base rounded-full bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              Explore Curriculum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-foreground/50">
            Developed under IIIT Dharwad Research Park (IDRP).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
