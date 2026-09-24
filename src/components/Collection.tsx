import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { SectionRefs } from "../types";

const baseUrl = import.meta.env.VITE_API_URL;

type Genre = { name: string };

const Collection = ({ refs }: { refs: SectionRefs }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const fetchGenres = async () => {
    try {
      const res = await fetch(`${baseUrl}/genres`);
      const json = await res.json();
      setGenres(json.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <section
      ref={refs.workRef}
      className="w-full min-h-screen bg-secondary p-4 pt-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 md:mb-16 px-4 md:px-6">
          <h1 className="font-montserrat font-light uppercase tracking-wide text-3xl md:text-5xl text-white">
            Featured Work &amp; Directions
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-neutral">
            A selection of recent projects, grouped by discipline. Choose a
            direction to explore the full collection.
          </p>
        </header>

        <ul className="flex flex-col bg-primary/10">
          {genres.map((genre, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <motion.button
                type="button"
                whileHover="hover"
                onClick={() => {
                  /* navigate to the genre page here */
                }}
                className="w-full flex items-center gap-6 md:gap-10 px-4 md:px-6 py-6 md:py-8 text-left cursor-pointer transition-colors hover:bg-primary/25"
              >
                <span className="text-xs text-neutral tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 font-montserrat font-light uppercase tracking-wide text-2xl md:text-4xl text-white">
                  {genre.name}
                </span>

                <motion.span
                  variants={{ hover: { x: 6 } }}
                  transition={{ duration: 0.3 }}
                  className="text-neutral"
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collection;