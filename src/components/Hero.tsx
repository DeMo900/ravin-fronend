import { LuArrowDown } from "react-icons/lu";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollY } = useScroll();
    const arrowOpacity = useTransform(scrollY, [0, 150], [0.1, 1]); 
    const arrowScale = useTransform(scrollY, [0, 150], [1, 2]);
    const arrowY = useTransform(scrollY, [0, 150], [0, -40]);

    return (
      <section className="w-full bg-secondary flex flex-col items-center h-screen px-4 pt-42 md:justify-center overflow-x-hidden">
        <span className="bg-primary w-18 h-1 rounded-lg mb-10"></span>
        
        <p className="text-white text-center text-[min(12vw,12rem)] md:text-7xl w-full max-w-[95vw] md:max-w-4xl leading-[1.1] md:leading-22 font-montserrat tracking-tight font-medium">
          Visual designer creating spaces, images, and ideas.
        </p>
        
        <p className="text-neutral/70 text-xs md:text-sm text-center mt-4">
          Architecture, visual identity, illustration, and selected creative work.
        </p>
        
        <motion.div
          style={{ opacity: arrowOpacity, scale: arrowScale, y: arrowY }}
          className="pt-20"
        >
          <LuArrowDown className="text-white text-2xl animate-bounce [animation-duration:1500ms]" />
        </motion.div>
      </section>
    );
}

export default Hero;
