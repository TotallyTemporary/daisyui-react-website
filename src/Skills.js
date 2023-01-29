import { Progress, Divider } from "react-daisyui";

let Skillbox = ( { title, color, percentage, items } ) => {
    /* <Progress className="h-6 rounded-sm" color={color} value={percentage}/> 
        I didn't like the progress bar look, readd if you can make it look good.
    */
    return <div className="width-full p-2 rounded-md border-[1px] border-transparent">
        <div className="flex align-center justify-center">
            <h3 className="h-full text-xl px-2">{title}</h3>
        </div>
        <Divider/>
        <ul className="grid grid-cols-2 gap-2 text-center">
            {items.map(item => 
                <li>{item}</li>    
            )}
        </ul>
    </div>
};

let Skills = () => {
    return <>
        <h1 className="text-4xl text-accent-content">Taidot</h1>
        <div className="grid grid-cols-2 gap-5">
            <Skillbox title="Hyvä" color="success" percentage={0.80}
                items={["Java", "Python", "OpenGL", "NumPy"]}/>
            <Skillbox title="Kohtalainen" color="warning" percentage={0.50}
                items={["Javascript", "Scala", "React", "Express"]}/>
        </div>
    </>
};

export default Skills;