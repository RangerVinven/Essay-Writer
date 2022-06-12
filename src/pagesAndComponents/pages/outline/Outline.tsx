import React, { useState } from 'react';

export default function Outline() {

    const [outlines, setOutlines] = useState<string[]>([]);
    const [currentOutline, setCurrentOutline] = useState(""); // For the outline the user is currently entering

    const addOutline = () => {
        setOutlines([...outlines, currentOutline]);
        setCurrentOutline("");
    }

    return (
        <div>
            <div>
                <input type="text" className="border-2 border-slate-200 rounded-md mr-3" placeholder="Draft" value={currentOutline} onChange={e => {setCurrentOutline(e.target.value)}}/>
                <button className="bg-green-500 px-3 text-white font-bold rounded-md" onClick={addOutline}>Add</button>
            </div>

            <div className="mt-10">
                <ul>
                    {
                        outlines.map(outline => {
                            return <li>{outline}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        
    )
}