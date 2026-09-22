//import {SiInstagram,SiDiscord} from "react-icons/si"
//import {LuArrowBigRight, LuCopy} from "react-icons/lu"
//import {motion} from "framer-motion";
//import type {SectionRefs} from "../types";
//import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div className="w-full h-vdh bg-secondary"></div>
    );
    /*return (
        <motion.section initial={{ opacity: 0}}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1,delay:1 , type:"spring",stiffness:100 }}
   ref={refs.contactRef} className="flex flex-col bg-surface-bright/40 items-center justify-center p-4 gap-4 md:p-32">
            <div className="flex flex-col items-center justify-center ">

            <h1 className="text-neon-cyan text-3xl md:text-6xl font-[Playfair_Display] font-bold text-center">
                Let's build together.
            </h1>
            <p className="text-white text-sm md:text-xl md:w-4xl  leading-7 md:leading-9 font-[Playfair_Display] font-bold  text-center">
          Available for collaborations and private commissions.
            </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <Link to="https://www.instagram.com/iamavaafisherrr/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-between w-full min-w-70 px-8 py-8 rounded-lg bg-slate-600/50 text-slate-200 hover:bg-neon-cyan hover:text-neon-purple transition-all duration-500 ease-in-out">
  <SiInstagram size={30} />
  <LuArrowBigRight size={30} className="text-neon-cyan" />
</button>  
                </Link>
                
              <button className="flex items-center justify-between w-full min-w-70 px-8 py-8 rounded-lg bg-slate-600/50 text-slate-200 hover:bg-neon-cyan hover:text-neon-purple transition-all duration-500 ease-in-out" onClick={()=>{navigator.clipboard.writeText("maaddyyyy._")}}>
  <SiDiscord size={30} />
 <h1 className="text-xl md:text-xl font-[Playfair_Display] font-bold text-center">maaddyyyy._</h1>
 <LuCopy size={30} className="text-neon-cyan" />
</button>
               
            </div>
        </motion.section>
    );
    */
}
export default Contact;