import React from "react";
import AideItem from "./AideItem";
import totalItems from "../data/AideItems";

console.log(totalItems);
function Aide(){
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {totalItems.map(item => (
                <AideItem key={item.text} className="h-auto max-w-full rounded-lg"
                    title={item.title} 
                    imgURL={item.imgURL} 
                    voiceFile={item.voiceFile}/>
            ))}
        </div>
    );
}
export default Aide;