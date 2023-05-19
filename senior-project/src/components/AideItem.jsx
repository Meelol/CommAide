import React from "react";
import {Howl, Howler} from 'howler';
import { useState } from "react";


function AideItem({title, imgURL, text, voiceFile}){

    const[disable,setDisable] = useState(false);

    function playSound(){
        setDisable(true);
        console.log("Clicked!");
        const sound = new Howl({
            src: [voiceFile],
            volume: 1,
            onend: function() {
                setDisable(false);
            }
        });
        sound.play();
        console.log("Sound!");

    }

    return (
            <button className=" group relative" type="button" disabled={disable} onClick={playSound}>
                <img className="relative object-cover group-hover:grayscale border-8 h-full w-full rounded-lg" src={imgURL} alt={title}/>
                <span class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 
                text-teal-700 font-bold invisible group-hover:grayscale-0 group-hover:visible text-6xl font-arimo">{text}</span>
            </button>
            
    );
}

export default AideItem;