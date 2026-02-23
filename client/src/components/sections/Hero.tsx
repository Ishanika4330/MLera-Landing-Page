import { motion } from "framer-motion";
import { Play, ArrowRight, BrainCircuit, Blocks, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[hsl(262_51%_12%)] -z-10">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[hsl(358_100%_73%)]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[hsl(264_100%_62%)]/20 rounded-full blur-[150px] mix-blend-screen" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDBNMCAyMGg0ME0yMCAwdjQwTTAgMzBoNDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 text-white/80 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[hsl(358_100%_73%)]" />
            <span>The intuitive way to learn AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight text-white"
          >
            Master Machine Learning <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(358_100%_73%)] to-[hsl(264_100%_62%)]">
              Without the Chaos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ditch passive video consumption. MLera provides structured learning paths, deep concept clarity, and interactive experiences designed for serious learners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-14 px-8 text-base bg-gradient-to-r from-[hsl(358_100%_73%)] to-[hsl(264_100%_62%)] hover:opacity-90 text-white rounded-full shadow-[0_0_30px_-5px_hsl(264_100%_62%)] transition-all hover:scale-105"
              data-testid="button-start-learning"
            >
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all"
                  data-testid="button-view-demo"
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  View Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-1 bg-black/90 border-white/10">
                <DialogTitle className="sr-only">MLera Demo Video</DialogTitle>
                <div className="aspect-video w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                   {/* We use a video element here, pointing to the provided branding video */}
                   <video 
                     controls 
                     autoPlay 
                     className="w-full h-full object-cover"
                     src="/Branding_Video_1771743244653.mp4"
                   >
                     Your browser does not support the video tag.
                   </video>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* Abstract 3D/Floating Elements Representation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 relative max-w-5xl mx-auto hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(262_51%_12%)] z-10 h-full" />
          <div className="glass-card rounded-2xl p-2 relative">
            <div className="flex border-b border-white/10 p-2 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="bg-black/40 rounded-xl h-[400px] p-8 flex items-center justify-center relative overflow-hidden">
               {/* Mock UI inside the hero "dashboard" window */}
               <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[hsl(264_100%_62%)] via-transparent to-transparent blur-2xl" />
               <div className="flex gap-8 relative z-20 w-full max-w-2xl">
                 <div className="w-1/3 space-y-4">
                   <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
                   <div className="h-4 w-full bg-white/5 rounded" />
                   <div className="h-4 w-5/6 bg-white/5 rounded" />
                   <div className="h-4 w-4/6 bg-white/5 rounded" />
                 </div>
                 <div className="w-2/3 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                      <BrainCircuit className="h-8 w-8 text-[hsl(264_100%_62%)]" />
                      <span className="text-sm text-white/50">Neural Networks</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                      <Blocks className="h-8 w-8 text-[hsl(358_100%_73%)]" />
                      <span className="text-sm text-white/50">Model Architecture</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
