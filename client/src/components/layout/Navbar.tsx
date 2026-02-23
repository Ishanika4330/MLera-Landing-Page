import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img 
              src="/MLera_only_logo.png" 
              alt="MLera Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(358_100%_73%)] to-[hsl(264_100%_62%)]">
              MLera
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Log in
            </Button>
            <Button className="bg-[hsl(264_100%_62%)] hover:bg-[hsl(264_100%_52%)] text-white rounded-full px-6">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/80 hover:text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full justify-center bg-[hsl(264_100%_62%)] hover:bg-[hsl(264_100%_52%)] text-white">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
