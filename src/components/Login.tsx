import {motion} from "framer-motion";
import { useState } from "react";
const Login = () => {
const [email,setEmail] = useState<string>("");
const [password,setPassword] = useState<string>("");
const [error,setError] = useState<string>("");
const env = import.meta.env;
type Greetings = "Goodmorning"|"Goodafternoon"|"GoodEvening";
    const now = new Date();
    const hour:number = now.getHours();
    let greeting:Greetings;
    if (hour < 12) {
        greeting = "Goodmorning";
    } else if (hour < 18) {
        greeting = "Goodafternoon";
    } else {
        greeting = "GoodEvening";
    }
    const handleFormSubmit = async (e:React.SubmitEvent)=>{
e.preventDefault();
if(email==="" || password===""){
    setError("Please fill all the fields");
    return;
}
if(email !==env.VITE_EMAIL_ADDRESS || password !==env.VITE_PASSWORD){
    setError("Invalid credentials");
    return;
}

setEmail("");
setPassword("");
    }
    return (
        <section className="flex flex-col md:my-0 my-[50%] items-center justify-center p-4 gap-4 md:p-32">
            <motion.h1
                className="text-neon-cyan text-3xl md:text-6xl font-[Playfair_Display] font-bold text-center"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1,delay:1 , type:"spring",stiffness:100 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {greeting},Ava!
            </motion.h1>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-full md:w-96">
                <input onInput={(e)=>setEmail(e.currentTarget.value)} value={email} type="email" className="border border-neon-cyan rounded-lg p-2 w-full md:w-96 text-white bg-transparent" placeholder="Email" />
                <input onInput={(e)=>setPassword(e.currentTarget.value)} value={password} type="password" className="border border-neon-cyan rounded-lg p-2 w-full md:w-96 text-white bg-transparent" placeholder="Password" />
                <button type="submit" className="border border-neon-cyan rounded-lg p-2 w-full md:w-96 bg-neon-cyan hover:bg-neon-purple transition-all duration-500 ease-in-out">Login</button>
            </form>
            {error && <p className="text-red-400 text-center text-sm font-[Montserrat] font-bold">{error}</p>}
        </section>
    );
}
export default Login;