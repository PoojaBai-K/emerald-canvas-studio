import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building responsive, performant UIs with React, TypeScript, and modern CSS frameworks.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Designing scalable APIs and services using Node.js, Python, and cloud-native architectures.",
    color: "from-secondary to-secondary-light",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Structuring efficient data models with PostgreSQL, MongoDB, and real-time databases.",
    color: "from-primary to-secondary",
  },
  {
    icon: Rocket,
    title: "DevOps & Deployment",
    description: "Automating CI/CD pipelines, containerization, and infrastructure as code.",
    color: "from-secondary-light to-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set covering the full development lifecycle, 
            from concept to deployment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
