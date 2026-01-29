import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    name: "CloudSync Pro",
    description: "A real-time collaboration platform designed for distributed teams. Features include live document editing, video conferencing, and project management tools.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
    impact: "50% faster team communication",
    role: "Full-Stack Developer",
    features: ["Real-time sync", "Video calls", "File sharing", "Task boards"],
  },
  {
    id: 2,
    name: "FinTrack Analytics",
    description: "Financial dashboard providing predictive insights and portfolio management. Built with a focus on data visualization and real-time market updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["TypeScript", "Python", "D3.js", "AWS Lambda", "DynamoDB"],
    impact: "Processing 1M+ transactions daily",
    role: "Lead Developer",
    features: ["Live charts", "AI predictions", "Portfolio tracking", "Alerts"],
  },
  {
    id: 3,
    name: "EcoMonitor",
    description: "IoT-powered environmental monitoring system for industrial and agricultural applications. Collects and analyzes data from thousands of sensors.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    tags: ["React Native", "Go", "MongoDB", "MQTT", "InfluxDB"],
    impact: "Deployed across 100+ locations",
    role: "Backend Developer",
    features: ["Sensor dashboard", "Anomaly detection", "Reports", "Mobile app"],
  },
  {
    id: 4,
    name: "DevHub Platform",
    description: "Developer productivity toolkit featuring code snippets, documentation generator, and team collaboration tools for software teams.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    tags: ["Next.js", "GraphQL", "Redis", "Docker", "Kubernetes"],
    impact: "10K+ active developers",
    role: "Full-Stack Developer",
    features: ["Code snippets", "API docs", "Team spaces", "Integrations"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 hero-glow" />
          <div className="floating-shape w-[400px] h-[400px] bg-primary/5 -top-20 -right-20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                A collection of projects that showcase my skills in building 
                scalable, user-centric applications. Each project represents 
                unique challenges and learning experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Actions */}
                      <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="default" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-background/90">
                          <Github className="w-4 h-4" />
                          Source
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-primary rounded-full mb-4">
                      {project.role}
                    </span>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {project.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <ArrowRight className="w-4 h-4 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="p-4 rounded-xl bg-accent border border-primary/20">
                      <span className="text-sm text-muted-foreground">Impact:</span>
                      <p className="text-lg font-semibold text-primary">{project.impact}</p>
                    </div>
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

export default ProjectsPage;
