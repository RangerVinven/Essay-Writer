import React, { useState } from 'react'

export default function Draft() {

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
        },
        {
            id: 2,
            title: "Aberham Lincon",
            drafts: [""]
        },
        {
            id: 1,
            title: "WWII",
            drafts: [""]
        }
    ]);

    // Changes the default draft to what the user sets
    const updateDraft = (event: any, outlineID: number) => {
        let newOutlines: any = outlines;
        newOutlines[outlineID].drafts[0] = event.target.value;
        
        setOutlines(newOutlines);        
    }

    return (
        <div className="flex items-center justify-center bg-slate-200 h-full w-full">
            <div className="w-2/5 h-5/6 my-10 bg-white rounded-md p-5">
                <div className="w-full h-full">
                    {
                        outlines.map((outline: any) => {
                            return <div>
                                <h1 className="text-3xl mb-1">{outline.title}</h1>
                                <textarea cols={30} rows={10} className="w-full border-slate-200 border-2 rounded-md mb-7" onChange={(event) => updateDraft(event, outline.id)}></textarea>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
