import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="hero" className="relative flex flex-col justify-center min-h-screen pt-[72px] px-6 md:px-8">
    <div className="max-w-[1200px] mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-neon-blue font-mono text-sm tracking-widest mb-6"
        >
          &lt;hello world /&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-4"
        >
          Mostafa Salah
          <br />
          <span className="gradient-text">Tayea</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-xl sm:text-2xl md:text-4xl text-muted-foreground font-semibold mb-8"
        >
          Backend Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="max-w-[560px] text-base md:text-lg text-muted-foreground leading-relaxed mb-12"
        >
          Backend-focused Software Engineer skilled in{" "}
          <span className="text-foreground font-medium">Java</span>,{" "}
          <span className="text-foreground font-medium">Spring Boot</span>, and scalable systems.
          Passionate about clean architecture, performance optimization, and continuous learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="hoverable group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:shadow-[0_0_30px_rgba(79,143,247,0.3)] transition-all duration-500"
          >
            View Projects
            <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:memosalah553@gmail.com"
            className="hoverable inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium text-sm hover:glow-border transition-all duration-500"
          >
            <i className="fas fa-envelope text-xs" />
            Get in Touch
          </a>
          <a
            href="https://github.com/Sasatayea"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium text-sm hover:glow-border transition-all duration-500"
          >
            <i className="fab fa-github text-xs" />
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="absolute bottom-12 right-0 hidden lg:flex items-center gap-3 glass-subtle px-5 py-3 rounded-full"
      >
        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
        <span className="text-xs text-muted-foreground font-medium">Open to opportunities</span>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="scroll-indicator">
        <div className="mouse" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
