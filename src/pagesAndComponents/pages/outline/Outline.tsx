import React, { useState } from 'react';

interface Props {
    addOutline: Function,
    outlines: Object[],
    
    currentOutline: string,
    setCurrentOutline: Function
}

export default function Outline(props: Props) {

    // const [outlines, setOutlines] = useState<string[]>([]);
    // const [currentOutline, setCurrentOutline] = useState(""); // For the outline the user is currently entering

    return (
        <div>
            <div>
                <input type="text" className="border-2 border-slate-200 rounded-md mr-3" placeholder="Draft" value={props.currentOutline} onChange={e => {props.setCurrentOutline(e.target.value)}}/>
                <button className="bg-green-500 px-3 text-white font-bold rounded-md" onClick={() => props.addOutline()}>Add</button>
            </div>

            <div className="mt-10">
                <ul>
                    {
                        props.outlines.map((outline: any) => {
                            return <li>{outline.title}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        
    )
}