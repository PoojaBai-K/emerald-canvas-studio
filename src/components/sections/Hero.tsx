import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Database, Globe, Terminal, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { Icon: Code2, delay: 0, x: 20, y: 30 },
  { Icon: Database, delay: 0.5, x: 80, y: 60 },
  { Icon: Globe, delay: 1, x: 40, y: 85 },
  { Icon: Terminal, delay: 1.5, x: 70, y: 20 },
  { Icon: Cpu, delay: 2, x: 15, y: 70 },
  { Icon: Layers, delay: 2.5, x: 85, y: 45 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Floating accent shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/40"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/30"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Available for new opportunities</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Crafting Digital
              <span className="relative inline-block mx-2">
                <span className="gradient-text">Experiences</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full origin-left"
                />
              </span>
              <br />
              That Matter
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 text-balance"
            >
              Full-stack developer passionate about building scalable applications 
              with clean code and intuitive design. Turning complex problems into 
              elegant solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/projects" className="group">
                  Explore Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex gap-8"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Built" },
                { value: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Visual */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circular container */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent via-background to-muted border border-border" />
              
              {/* Rotating ring */}
              <motion.div 
                className="absolute inset-4 rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing glow */}
              <motion.div 
                className="absolute inset-12 rounded-full bg-primary/5"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Center code block visual */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border p-6 shadow-lg max-w-[200px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="text-primary">const</span>
                      <span className="text-foreground">dev</span>
                      <span className="text-muted-foreground">=</span>
                    </motion.div>
                    <motion.div 
                      className="pl-2 text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {"{ creative: true }"}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating tech icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute w-10 h-10 rounded-xl bg-card border border-border shadow-md flex items-center justify-center"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    opacity: { delay: delay + 0.5, duration: 0.3 },
                    scale: { delay: delay + 0.5, duration: 0.3 },
                    y: { delay: delay + 0.8, duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
              ))}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="30%" y1="35%" x2="50%" y2="50%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                />
                <motion.line
                  x1="70%" y1="25%" x2="50%" y2="50%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.7, duration: 1 }}
                />
                <motion.line
                  x1="85%" y1="60%" x2="55%" y2="50%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.9, duration: 1 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
