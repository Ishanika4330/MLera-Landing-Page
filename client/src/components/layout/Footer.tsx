export function Footer() {
  return (
    <footer className="bg-[hsl(262_51%_12%)] py-12 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/MLera_only_logo.png" 
                alt="MLera Logo" 
                className="h-8 w-auto grayscale opacity-80"
              />
              <span className="text-xl font-heading font-bold text-white/90">
                MLera
              </span>
            </div>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed">
              Structured Machine Learning teaching platform designed to simplify how learners understand ML concepts.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white/90 font-heading">Platform</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#" className="hover:text-[hsl(358_100%_73%)] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[hsl(358_100%_73%)] transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-[hsl(358_100%_73%)] transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white/90 font-heading">Company</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#" className="hover:text-[hsl(264_100%_62%)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[hsl(264_100%_62%)] transition-colors">IDRP</a></li>
              <li><a href="#" className="hover:text-[hsl(264_100%_62%)] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} MLera. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
