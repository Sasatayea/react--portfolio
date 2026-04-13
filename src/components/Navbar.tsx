import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2 }}
      className="fixed top-0 w-full h-[72px] glass-strong z-50"
    >
      <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto px-6 md:px-8">
        <a href="#" className="text-xl font-heading font-extrabold tracking-tighter hoverable">
          <span className="gradient-text">M</span>ostafa<span className="gradient-text">.</span>
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-300 hoverable relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="hoverable px-5 py-2 rounded-full text-sm font-semibold gradient-border bg-secondary text-foreground hover:bg-muted transition-colors duration-300"
          >
            Let's Talk
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground text-xl bg-transparent border-none cursor-pointer hoverable z-50"
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[72px] left-0 w-full glass-strong flex flex-col gap-6 p-8 border-t border-border"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="text-muted-foreground text-lg font-medium hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="px-5 py-3 rounded-full text-center font-semibold gradient-border bg-secondary text-foreground"
            >
              Let's Talk
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
