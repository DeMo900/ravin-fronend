import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SectionRefs } from "../types";

interface ContactProps {
  refs?: SectionRefs;
}

interface ContactLink {
  title: string;
  href: string;
  bgImage: string;
}

const contactLinks: ContactLink[] = [
  {
    title: "INSTAGRAM",
    href: "https://instagram.com",
    bgImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "BEHANCE",
    href: "https://behance.net",
    bgImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "LINKEDIN",
    href: "https://linkedin.com",
    bgImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "EMAIL",
    href: "mailto:contact@hazemomar.com",
    bgImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
];

const Contact = ({ refs }: ContactProps) => {
  return (
    <section
      ref={refs?.contactRef}
      id="contact"
      className="w-full min-h-screen bg-secondary flex flex-col justify-center items-center px-4 py-24 md:py-32"
    >
      <div className="w-full max-w-2xl md:max-w-3xl flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-montserrat font-light text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Let's build together.
          </h2>
          <p className="font-montserrat text-neutral text-xs sm:text-sm md:text-base mt-4 font-light tracking-wide">
            Available for collaborations, commissions, and selected projects.
          </p>
        </motion.div>

        {/* Links List */}
        <div className="w-full flex flex-col gap-2.5">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="relative w-full h-18 sm:h-20 flex items-center justify-between px-6 sm:px-8 overflow-hidden rounded-xs bg-[#1E1E1E] group cursor-pointer border border-white/5 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Background Architectural Image */}
              <img
                src={link.bgImage}
                alt={link.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
              />

              {/* Tint / Gradient Overlay */}
              <div className="absolute inset-0 bg-secondary/80 group-hover:bg-primary/25 transition-colors duration-500 pointer-events-none" />

              {/* Title */}
              <span className="relative z-10 font-montserrat font-light text-lg sm:text-xl md:text-2xl text-white tracking-widest uppercase">
                {link.title}
              </span>

              {/* Arrow */}
              <span className="relative z-10 text-white/80 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                <ArrowRight size={20} className="stroke-[1.5]" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;