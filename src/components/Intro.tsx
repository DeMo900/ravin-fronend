import { motion } from 'framer-motion'
import type {SectionRefs} from "../types";

const Intro = ({refs}: {refs: SectionRefs}) => {
    return (
        <section ref={refs.introRef} className="w-[90%] md:w-[70%] flex flex-col  md:items-start p-8 md:p-32 gap-6 md:gap-8">
            <motion.h1
                className="text-white text-3xl sm:text-4xl md:text-6xl font-[Playfair_Display] font-bold text-center md:text-left"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <span className="text-neon-cyan">Hey</span>, I'm Ava
            </motion.h1>

            <motion.p
                className="text-white text-sm sm:text-base md:text-xl md:w-4xl  leading-7 md:leading-9 font-[Playfair_Display] font-bold  text-left"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                I'm a digital artist, web developer, and fashion designer. Basically, I love building cool
                things from scratch whether that's a clean website, a moody digital painting, or a bold
                clothing design.
                When I'm not coding or sketching, I'm usually writing script dialogue, getting lost in a
                good playlist, or just finding inspiration in the everyday chaos around me.
                Take a look around, catch the vibe, and welcome to my world!
            </motion.p>
        </section>
    );
}

export default Intro;