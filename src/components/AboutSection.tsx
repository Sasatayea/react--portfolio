import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl mb-16 flex items-center tracking-tighter"
        >
          <span className="gradient-text font-mono text-lg mr-3">01.</span>
          About Me
          <span className="section-line" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            {[
              <>Hello! I'm <strong className="text-foreground">Mostafa Salah Tayea</strong>, a Backend Software Engineer based in Giza, Egypt. I hold a B.S. in Computer Science from Cairo University (Class of 2023).</>,
              <>My passion lies in designing and building robust, scalable backend systems using <span className="gradient-text font-semibold">Java</span> and the <span className="gradient-text font-semibold">Spring ecosystem</span>. I believe in writing clean, maintainable code that follows SOLID principles.</>,
              <>When I'm not coding, I'm diving into new technologies, sharpening my problem-solving skills, and exploring performance optimization techniques.</>
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex items-center gap-2 glass-subtle px-4 py-2 rounded-full text-sm text-muted-foreground">
                <i className="fas fa-university text-neon-blue text-xs" />
                Cairo University
              </div>
              <div className="flex items-center gap-2 glass-subtle px-4 py-2 rounded-full text-sm text-muted-foreground">
                <i className="fas fa-map-marker-alt text-neon-purple text-xs" />
                Giza, Egypt
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-neon-blue/20 via-neon-purple/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-2xl gradient-border">
              <img
                src={profilePhoto}
                alt="Mostafa Salah Tayea"
                className="w-full grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
