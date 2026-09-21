import { LuArrowDown } from "react-icons/lu";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollY } = useScroll();
 const arrowOpacity = useTransform(scrollY, [0, 150], [0.1,4 ]);
    const arrowScale = useTransform(scrollY, [0, 150], [1, 1.5]);
    const arrowY = useTransform(scrollY, [0, 150], [0, -40]);
    return (
        <section className="w-full bg-secondary h-screen relative"> 
            <div className="flex flex-col items-center pt-24 justify-center absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 md:gap-2">
                <span className="bg-primary w-18 h-1 rounded-lg mb-16"></span>
                <p className="text-white text-center text-4xl md:text-7xl max-w-2xl leading-14 md:leading-22 font-montserrat">
                    Visual designer creating spaces, images, and ideas. 
                </p>
                <p className='text-neutral/70 text-xs md:text-sm text-center'>
                    Architecture, visual identity, illustration, and selected creative work. 
                </p>
                <motion.div
                    style={{ opacity:arrowOpacity, scale: arrowScale,y:arrowY }}
                    className="pt-20"
                >
                    <LuArrowDown className="text-white text-2xl animate-bounce " />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
