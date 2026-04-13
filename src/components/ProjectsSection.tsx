import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const projects = [
  {
    title: "Movies Web Application",
    subtitle: "Full-Stack Web App",
    description:
      "Built a responsive web app for browsing and managing movie resources from IMDB open API, with secure user authentication and role-based access. Implemented role-based dashboard access (Admin/Users), enabling dynamic content rendering and secure operations.",
    tech: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Thymeleaf", "MySQL", "Angular"],
    github: "https://github.com/Sasatayea/Spring-boot-Dashboard-api",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-blue",
    featured: true,
  },
  {
    title: "Books Store",
    subtitle: "Backend Development",
    description:
      "Developed real-time client-server Books application using Spring Data JPA applying Projection, Pagination, Validators, Exception Handling, Logging, ShedLock, Actuator, AWS S3, Swagger UI, AOP, and REST API.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "AWS S3", "Swagger UI", "AOP"],
    github: "https://github.com/Sasatayea/data-jpa-books-project",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-purple",
    featured: false,
  },
  {
    title: "Employee System",
    subtitle: "Backend Development — MVC",
    description:
      "Developed real-time client-server Employee System using Spring Boot MVC, Security, and Data JPA to manage Login, Register, User Operations, and page views based on user role.",
    tech: ["Java", "Spring Boot MVC", "Spring Security", "Spring Data JPA", "Thymeleaf"],
    github: "https://github.com/Sasatayea/spring-boot-spring-mvc-security",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-cyan",
    featured: false,
  },
  {
    title: "DoctorNow",
    subtitle: "Graduation Project",
    description:
      "Developed a mobile application using React Native to find the nearest doctor clinic and make a booking. Integrated Firebase, Stripe payments, Google Maps API, PHP backend, and MySQL database.",
    tech: ["React Native", "PHP", "Firebase", "MySQL", "Stripe", "Google Maps API"],
    github: "https://github.com/amrsheeka/Doctor_Now",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500",
    accent: "neon-pink",
    featured: false,
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

const accentBg: Record<string, string> = {
  "neon-blue": "bg-neon-blue/10 text-neon-blue border-neon-blue/20",
  "neon-purple": "bg-neon-purple/10 text-neon-purple border-neon-purple/20",
  "neon-cyan": "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
  "neon-pink": "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
};

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
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
      className={project.featured ? "md:col-span-2" : ""}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setGlare({ x: 50, y: 50 });
        }}
        className={`hoverable glass rounded-2xl overflow-hidden ${accentBorder[project.accent]} transition-all duration-500 group ${
          project.featured ? "md:grid md:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
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

        <div className={`relative overflow-hidden ${project.featured ? "h-full min-h-[240px]" : "h-48 md:h-56"}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border ${accentBg[project.accent]}`}>
                <i className="fas fa-star mr-1 text-[8px]" />
                Featured
              </span>
            </div>
          )}

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
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono text-text-dim bg-secondary/50 px-2.5 py-1 rounded-md">
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
