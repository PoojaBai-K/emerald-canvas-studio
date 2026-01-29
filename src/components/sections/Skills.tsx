import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    color: "from-primary to-primary-light",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "from-secondary to-secondary-light",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "Go", level: 65 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    color: "from-primary to-secondary",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Prisma", level: 85 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    id: "tools",
    title: "DevOps",
    icon: Wrench,
    color: "from-secondary-light to-primary",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const currentCategory = skillCategories.find(c => c.id === activeCategory)!;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Section Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background accent */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technology Toolbox
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated set of technologies I work with daily to build robust, 
            scalable applications.
          </p>
        </motion.div>

        {/* Category Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 p-2 bg-muted/50 rounded-2xl border border-border backdrop-blur-sm">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? "text-primary-foreground" : ""}`} />
                  <span className="relative z-10 hidden sm:inline">{category.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                    {/* Skill name */}
                    <span className="w-32 text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    
                    {/* Progress bar container */}
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.1,
                          ease: "easeOut" 
                        }}
                        className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full relative`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1 + 0.5,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Level indicator */}
                    <span className="w-12 text-right text-sm font-semibold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Visual skill dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex justify-center gap-3"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
