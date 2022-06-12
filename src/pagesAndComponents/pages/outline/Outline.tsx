import React, { useState } from 'react';

export default function Outline() {

    const [outlines, setOutlines] = useState<Object[]>([
        {
            id: 0,
            title: "Hello",
            drafts: [""]
        },
        {
            id: 1,
            title: "Test",
            drafts: [""]
        }
    ]);
    const [currentOutline, setCurrentOutline] = useState(""); // For the outline the user is currently entering

    const addOutline = () => {
        setOutlines([...outlines, {
			id: outlines.length,
			title: currentOutline,
			drafts: [""]
		}]);
        
        console.log(outlines.length);
        
        setCurrentOutline("");		
    }


    const deleteOutline = (outlineID: number) => {
		let newOutlines: any = outlines;
		
		// Deletes the outline from the newOutlines array        
		newOutlines.splice(outlineID, 1);

		// Loops through newOutlines and changes the id of each outline to the correct one (the one where it matches the position in the array)
		for(let i = 0; i < newOutlines.length; i++) {
			newOutlines[i].id = i;
		}
        
		setOutlines(newOutlines);
	}

    return (
        <div className="flex items-center justify-center bg-slate-200 h-screen w-full">
            <div className="w-2/5 h-5/6 my-10 bg-white rounded-md p-5">
                <div className="w-full h-full">
                    <div className="flex justify-center">
                        <input type="text" className="border-2 border-slate-200 rounded-md pl-1 mr-3 w-3/5" placeholder="Draft" value={currentOutline} onChange={e => {setCurrentOutline(e.target.value)}}/>
                        <button className="bg-green-500 px-3 text-white font-bold rounded-md" onClick={() => addOutline()}>Add</button>
                    </div>

                    <div className="mt-10">
                        <ul>
                            {
                                outlines.map((outline: any) => {
                                    return <li key={outline.title} className="mb-4">
                                            <h1 className="text-2xl inline mr-3">{outline.title}</h1>
                                            <button type="submit" onClick={() => deleteOutline(outline.id)} className="bg-red-500 font-bold p-1 rounded-md">Delete</button>
                                        </li>
                                })
                            }
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}