import React from "react";
import AideItem from "./AideItem";
import totalItems from "../data/AideItems";

console.log(totalItems);
function Aide(){
    return (
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 content-center">
            {totalItems.map(item => (
                <AideItem key={item.text}
                    title={item.title} 
                    text={item.text}
                    imgURL={item.imgURL} 
                    voiceFile={item.voiceFile}
                    />
            ))}
        </div>
    );
}
export default Aide;