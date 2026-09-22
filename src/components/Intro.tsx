import { motion } from 'framer-motion'
import aboutMeImg from "../assets/aboutMe.jpeg";
import {useState} from 'react';
import type {SectionRefs} from "../types";

const Intro = ({refs}: {refs: SectionRefs}) => {
    const [showFullText, setShowFullText] = useState<boolean>(false);
    return (
        <section ref={refs.introRef} className="w-full min-h-screen bg-secondary p-4 pt-32 flex flex-col md:flex-row  justify-center gap-12 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-120"
            >
                <img 
                    src={aboutMeImg} 
                    alt="aboutMe" 
                    className="w-full h-112.5 md:h-150 object-cover object-center rounded-lg shadow-xl"
                />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="font-montserrat max-w-xl text-white "
            >
                <h1 className="text-4xl text-primary mb-6 font-bold tracking-wide">About me</h1>
               <p 
    className={`whitespace-pre-line text-neutral-300 text-2xl leading-10 cursor-pointer transition-all duration-300 ${
        showFullText ? '' : 'line-clamp-2'
    } md:line-clamp-none`}
    onClick={() => setShowFullText(!showFullText)}
>
    Hazem Omar is an <span className="text-primary font-medium">Art Director, Graphic & Interior Designer</span> currently studying at the Faculty of Fine Arts.
    {"\n\n"}
    My work spans Art Direction, Graphic Design, Interior Design, and 3D Visualization, driven by a strong interest in <span className="text-primary font-medium">art, cinema, and visual storytelling</span>.
    {"\n\n"}
    I believe design is more than something that simply looks good — it is <span className="text-primary font-medium">an idea you can see, a scene you can feel</span>, and a detail that leaves an impression.
</p>  

            </motion.div>
         
        </section>
    );
}

export default Intro;
