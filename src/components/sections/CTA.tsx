import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Zap, text: "Fast turnaround" },
  { icon: Clock, text: "Flexible hours" },
  { icon: Briefcase, text: "Project-based" },
];

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="floating-shape w-[500px] h-[500px] bg-primary/5 -top-20 -right-20" />
      <div className="floating-shape w-[400px] h-[400px] bg-secondary/5 -bottom-20 -left-20" style={{ animationDelay: "-7s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-secondary via-secondary to-secondary-light p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Content */}
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block text-primary-light text-sm font-medium mb-4 tracking-wide uppercase"
              >
                Open for Opportunities
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4"
              >
                Let's Build Something Amazing Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-secondary-foreground/80 text-lg mb-6"
              >
                Whether you need a full-stack application, a modern frontend, or 
                technical consulting, I'm here to help bring your vision to life.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-secondary-foreground/90"
                  >
                    <benefit.icon className="w-4 h-4 text-primary-light" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <Button
                variant="gradient"
                size="xl"
                asChild
                className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90"
              >
                <Link to="/contact" className="group">
                  Hire Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <p className="text-secondary-foreground/60 text-sm text-center">
                Response within 24 hours
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
