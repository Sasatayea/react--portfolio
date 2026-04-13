import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const socials = [
    { icon: "fab fa-github", href: "https://github.com/Sasatayea", label: "GitHub" },
    { icon: "fab fa-linkedin", href: "https://linkedin.com/in/Mostafa-Salah", label: "LinkedIn" },
    { icon: "fas fa-envelope", href: "mailto:memosalah553@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 text-center border-t border-border relative z-10"
    >
      <div className="flex justify-center gap-5 mb-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.icon.includes("github") || s.icon.includes("linkedin") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="hoverable w-10 h-10 rounded-full glass-subtle flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-border transition-all duration-300"
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>
      <p className="text-text-dim text-xs font-mono">
        Designed & Built by <span className="gradient-text">Mostafa Salah Tayea</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
