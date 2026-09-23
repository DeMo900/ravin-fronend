import {useEffect,useState} from 'react';
import type {SectionRefs} from "../types"
const baseUrl = import.meta.env.VITE_API_URL;
const Collection = ({refs}: {refs: SectionRefs}) => {
    const [works, setWorks] = useState([]);
    const fetchWork = async ()=>{
        try {
            const res = await fetch(`${baseUrl}`);
            const data = await res.json();
            setWorks(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchWork();
    }, []);
    return (
        <section className="w-full min-h-screen bg-secondary p-4 pt-32 flex flex-col md:flex-row justify-center gap-12 overflow-hidden"
        ref={refs.workRef}>
            <h1>Collections</h1>
            {works.map((work: any) => (
                <div key={work.id}>
                    <h2>{work.title}</h2>
                    <p>{work.body}</p>
                </div>
            ))}
        </section>
    );
}
export default Collection;