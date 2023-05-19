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
        <div className="border relative h-auto w-auto rounded-lg">
            <button type="button" disabled={disable} onClick={playSound}>
                <img src={imgURL} alt={title}/>
            </button>
        </div>
    );
}

export default AideItem;