import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="max-w-[700px] mx-auto px-6 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl mb-6 tracking-tighter"
        >
          <span className="gradient-text font-mono text-lg block mb-3">04.</span>
          Let's Build Something
          <br />
          <span className="gradient-text">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg mb-12 max-w-[500px] mx-auto"
        >
          I'm currently open to new opportunities. Whether you have a project idea or just want to connect — let's talk!
        </motion.p>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-6 md:p-8 text-left space-y-5 mb-10"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:memosalah553@gmail.com";
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={`w-full bg-secondary/50 border ${focused === "name" ? "border-neon-blue/50 shadow-[0_0_15px_hsl(220_90%_56%/0.1)]" : "border-border"} rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-dim outline-none transition-all duration-300`}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`w-full bg-secondary/50 border ${focused === "email" ? "border-neon-blue/50 shadow-[0_0_15px_hsl(220_90%_56%/0.1)]" : "border-border"} rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-dim outline-none transition-all duration-300`}
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              rows={4}
              placeholder="Your Message"
              onFocus={() => setFocused("msg")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-secondary/50 border ${focused === "msg" ? "border-neon-blue/50 shadow-[0_0_15px_hsl(220_90%_56%/0.1)]" : "border-border"} rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-dim outline-none resize-none transition-all duration-300`}
            />
          </div>
          <button
            type="submit"
            className="hoverable w-full py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:shadow-[0_0_30px_rgba(79,143,247,0.3)] transition-all duration-500 group"
          >
            Send Message
            <i className="fas fa-paper-plane ml-2 text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.form>

        {/* Quick contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {[
            { icon: "fas fa-envelope", label: "memosalah553@gmail.com", href: "mailto:memosalah553@gmail.com" },
            { icon: "fas fa-phone", label: "+201118914120", href: "tel:+201118914120" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hoverable flex items-center gap-2 glass-subtle px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:glow-border transition-all duration-300"
            >
              <i className={`${item.icon} text-xs text-neon-blue`} />
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
