import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const projects = [
  {
    title: "E-Commerce API",
    subtitle: "Full-Stack Commerce Engine",
    description: "RESTful E-Commerce API with JWT Auth, Role-Based Authorization, Product Management, Shopping Cart, Order Processing, and Stripe Payments.",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT", "Stripe"],
    github: "https://github.com/Sasatayea/Spring-boot-Dashboard-api",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-blue",
  },
  {
    title: "REST CRUD APIs",
    subtitle: "Employee Management System",
    description: "Clean RESTful APIs for CRUD operations with robust service layers, DTO mapping, and comprehensive exception handling.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL"],
    github: "https://github.com/Sasatayea/data-jpa-books-project",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-purple",
  },
  {
    title: "Employee MVC System",
    subtitle: "Role-Based Web Application",
    description: "Real-time client-server Employee System with Spring Boot MVC, Security, and Data JPA for Login, Registration, and Role-based views.",
    tech: ["Java", "Spring Boot MVC", "Spring Security", "JPA"],
    github: "https://github.com/Sasatayea/spring-boot-spring-mvc-security",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-cyan",
  },
  {
    title: "DoctorNow",
    subtitle: "Graduation Project",
    description: "Mobile application for finding nearest doctor clinics with booking. Integrated Firebase, Stripe payments, and Google Maps API.",
    tech: ["React Native", "PHP", "Firebase", "Stripe", "Maps API"],
    github: "https://github.com/amrsheeka/Doctor_Now",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-pink",
  },
];

const accentBorder: Record<string, string> = {
  "neon-blue": "hover:shadow-[0_0_30px_hsl(220_90%_56%/0.15)]",
  "neon-purple": "hover:shadow-[0_0_30px_hsl(265_90%_66%/0.15)]",
  "neon-cyan": "hover:shadow-[0_0_30px_hsl(175_80%_50%/0.15)]",
  "neon-pink": "hover:shadow-[0_0_30px_hsl(330_85%_60%/0.15)]",
};

const accentText: Record<string, string> = {
  "neon-blue": "text-neon-blue",
  "neon-purple": "text-neon-purple",
  "neon-cyan": "text-neon-cyan",
  "neon-pink": "text-neon-pink",
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -8, y: (x - 0.5) * 8 });
    setGlare({ x: x * 100, y: y * 100 });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setGlare({ x: 50, y: 50 }); }}
        className={`hoverable glass rounded-2xl overflow-hidden ${accentBorder[project.accent]} transition-all duration-500 group`}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        }}
      >
        {/* Glare effect */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
          }}
        />

        <div className="relative overflow-hidden h-48 md:h-56">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute top-4 right-4 z-10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-subtle flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>

        <div className="p-6 md:p-8 relative z-10">
          <p className={`${accentText[project.accent]} font-mono text-xs tracking-wider mb-2`}>
            {project.subtitle}
          </p>
          <h3 className="font-heading text-xl md:text-2xl mb-3">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-text-dim bg-secondary/50 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl mb-16 flex items-center tracking-tighter"
        >
          <span className="gradient-text font-mono text-lg mr-3">03.</span>
          Projects
          <span className="section-line" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
