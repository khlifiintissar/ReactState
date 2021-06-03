import React,{useState} from 'react'

export default function MyFunctionComponent() {
    const [name,setName] = useState("Arya Starck");
    return (
        <div>
            <button onClick={()=>{setName("Sarah")}}>Hello {name}</button>
        </div>
    );
}; 
