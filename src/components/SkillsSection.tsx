import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "fas fa-code",
    color: "neon-blue",
    skills: [
      { icon: "fab fa-java", name: "Java" },
      { icon: "fab fa-js", name: "JavaScript" },
      { icon: "fas fa-database", name: "SQL" },
      { icon: "fab fa-html5", name: "HTML/CSS" },
    ],
  },
  {
    title: "Frameworks",
    icon: "fas fa-layer-group",
    color: "neon-purple",
    skills: [
      { icon: "fas fa-leaf", name: "Spring Boot" },
      { icon: "fas fa-shield-alt", name: "Spring Security" },
      { icon: "fas fa-layer-group", name: "Spring Data JPA" },
      { icon: "fas fa-sitemap", name: "Spring MVC" },
      { icon: "fas fa-project-diagram", name: "Hibernate" },
      { icon: "fas fa-plug", name: "JDBC" },
      { icon: "fas fa-file-code", name: "Thymeleaf" },
    ],
  },
  {
    title: "Concepts",
    icon: "fas fa-brain",
    color: "neon-cyan",
    skills: [
      { icon: "fas fa-cubes", name: "OOP" },
      { icon: "fas fa-stream", name: "DSA" },
      { icon: "fas fa-exchange-alt", name: "RESTful APIs" },
      { icon: "fas fa-puzzle-piece", name: "Design Patterns" },
      { icon: "fas fa-check-double", name: "SOLID" },
      { icon: "fas fa-broom", name: "Clean Code" },
    ],
  },
  {
    title: "Tools",
    icon: "fas fa-wrench",
    color: "neon-pink",
    skills: [
      { icon: "fab fa-git-alt", name: "Git & GitHub" },
      { icon: "fas fa-paper-plane", name: "Postman" },
      { icon: "fas fa-database", name: "MySQL" },
    ],
  },
];

const colorMap: Record<string, string> = {
  "neon-blue": "from-neon-blue/20 to-neon-blue/5",
  "neon-purple": "from-neon-purple/20 to-neon-purple/5",
  "neon-cyan": "from-neon-cyan/20 to-neon-cyan/5",
  "neon-pink": "from-neon-pink/20 to-neon-pink/5",
};

const textColorMap: Record<string, string> = {
  "neon-blue": "text-neon-blue",
  "neon-purple": "text-neon-purple",
  "neon-cyan": "text-neon-cyan",
  "neon-pink": "text-neon-pink",
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ rotateX: -y * 10, rotateY: x * 10 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setStyle({ rotateX: 0, rotateY: 0 })}
    >
      <div
        className="tilt-card-inner h-full"
        style={{ transform: `perspective(1000px) rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)` }}
      >
        {children}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl mb-16 flex items-center tracking-tighter"
        >
          <span className="gradient-text font-mono text-lg mr-3">02.</span>
          Skills & Tools
          <span className="section-line" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * catIdx }}
            >
              <TiltCard className="hoverable">
                <div className={`h-full glass rounded-2xl p-6 md:p-8 hover:glow-border transition-all duration-500 relative overflow-hidden group`}>
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[cat.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`${textColorMap[cat.color]} text-sm`}>
                        <i className={cat.icon} />
                      </span>
                      <h3 className="font-heading text-lg">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s, sIdx) => (
                        <motion.span
                          key={s.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.15 * catIdx + 0.05 * sIdx }}
                          className="glass-subtle px-3 py-1.5 rounded-full text-xs md:text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground hover:border-neon-blue/30 transition-all duration-300"
                        >
                          <i className={`${s.icon} text-xs`} />
                          {s.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
