import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Download, MapPin, Calendar, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "Tech Startup",
    description: "Leading development of cloud-native applications and mentoring junior developers.",
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Digital Agency",
    description: "Built custom web applications for clients across various industries.",
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "Software Company",
    description: "Started professional journey building React applications and learning backend development.",
  },
];

const values = [
  {
    icon: Coffee,
    title: "Clean Code",
    description: "I believe in writing code that's readable, maintainable, and well-documented.",
  },
  {
    icon: Calendar,
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and I'm committed to staying current with best practices.",
  },
  {
    icon: MapPin,
    title: "User-Centric",
    description: "Every line of code should ultimately serve the user's needs and experience.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 hero-glow" />
          <div className="floating-shape w-[400px] h-[400px] bg-primary/5 -top-20 -right-20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Passionate Developer, <br />
                  <span className="gradient-text">Problem Solver</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  I'm a full-stack developer with a passion for creating elegant solutions 
                  to complex problems. My journey in tech started with curiosity about how 
                  things work, and evolved into a career building applications that make 
                  a difference.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source, or sharing knowledge with the developer 
                  community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light mb-6 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">JD</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">John Developer</h3>
                    <p className="text-muted-foreground">Full-Stack Engineer</p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 section-gradient">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                My Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Values That Guide My Work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                My Journey So Far
              </h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Timeline Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>

                  <div className="bg-card rounded-xl border border-border p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-primary rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
