import type {SectionRefs} from "../types";
import { LuMenu } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const NavBar = ({refs}: {refs: SectionRefs}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      return (
          <nav className="flex justify-between gap-2 md:gap-0 w-full fixed md:p-4 p-4 z-50 items-center bg-secondary border-b border-neutral">
             <h1 className="text-primary text-3xl  font-semibold font-montserrat ">Ravin</h1>
             <ul className="md:flex hidden gap-2 md:gap-6">
               <li className=" text-slate-200 text-xs hover:text-primary transition-colors duration-220 cursor-pointer font-montserrat font-semibold" onClick={() => refs.workRef.current?.scrollIntoView({behavior: 'smooth'})}>WORKS</li>
               <li className=" text-slate-200 text-xs hover:text-primary transition-colors duration-220 cursor-pointer font-montserrat font-semibold" onClick={() => refs.introRef.current?.scrollIntoView({behavior: 'smooth'})}>ABOUT</li>
               <li className=" text-slate-200 text-xs hover:text-primary transition-colors duration-220 cursor-pointer font-montserrat font-semibold" onClick={() => refs.introRef.current?.scrollIntoView({behavior: 'smooth'})}>PROCESS</li>
               <li className=" text-slate-200 text-xs hover:text-primary transition-colors duration-220 cursor-pointer font-montserrat font-semibold" onClick={() => refs.contactRef.current?.scrollIntoView({behavior: 'smooth'})}>CONNECT</li>
             </ul>
             <div>
 <div className="flex md:hidden justify-center">
    <button className="menu-toggle flex flex-col items-center justify-center cursor-pointer"
     onClick={() => setIsMenuOpen(!isMenuOpen)}
     aria-label="Toggle Menu"
    >
       <LuMenu className="text-white text-4xl " />
    </button>
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden absolute top-16 right-4 text-white font-semibold bg-secondary border border-neutral p-2 rounded-md shadow-lg min-w-35  "
        >
          <ul className="flex flex-col">
            <li
              className="border-b border-neutral p-2 cursor-pointer hover:text-primary transition-colors"
              onClick={() => {
                refs.workRef.current?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              WORKS
            </li>
            <li
              className="border-b border-neutral p-2 cursor-pointer hover:text-primary transition-colors"
              onClick={() => {
                refs.introRef.current?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              ABOUT
            </li>
            <li
              className="border-b border-neutral p-2 cursor-pointer hover:text-primary transition-colors"
              onClick={() => {
                refs.introRef.current?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              PROCESS
            </li>
            <li
              className="p-2 cursor-pointer hover:text-primary transition-colors"
              onClick={() => {
                refs.contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              CONNECT
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
             <button className="text-white border border-neutral md:px-4 md:py-1 p-1  md:text-sm text-xs hover:bg-primary transition-colors duration-220 cursor-pointer hidden md:block font-montserrat font-semibold">HIRE ME</button>
             </div>
          </nav>
      );
  }


export default NavBar;
