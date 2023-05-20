import AideItem from "./AideItemModel";

import waterImg from "../assets/Images/WaterGlass.jpg";
import waterSound from "../assets/Audio/WaterGlass.mp3"

import restroomImg from "../assets/Images/Restroom.jpg";
import restroomSound from "../assets/Audio/Restroom.mp3";

import thankYouImg from "../assets/Images/ThankYou.jpg";
import  thankYouSound from "../assets/Audio/ThankYou.mp3";

import activityRoomImg from "../assets/Images/ActivityRoom.jpg";
import activityRoomSound from "../assets/Audio/ActivityRoom.mp3"; 

import backToRoomImg from "../assets/Images/Bedroom.jpg";
import backToRoomSound from "../assets/Audio/Bedroom.mp3";

import painImg from "../assets/Images/Pain.jpg";
import painSound from "../assets/Audio/Pain.mp3";

import foodImg from "../assets/Images/Food.jpg";
import foodSound from "../assets/Audio/Food.mp3";

import goOutsideImg from "../assets/Images/Outside.jpg";
import goOutsideSound from "../assets/Audio/Outside.mp3";


const glassOfWater = new AideItem("water","Water", 
                         waterImg, waterSound);

const restroom = new AideItem("restroom", "Go to the restroom", 
                          restroomImg, restroomSound);

const thankYou = new AideItem("thank you", "Thank you", 
                          thankYouImg, thankYouSound);

const activityRoom = new AideItem("Activity Room", "Go to Activity Room", 
activityRoomImg, activityRoomSound);

const backToRoom = new AideItem("Bedroom","Go to bedroom",
backToRoomImg, backToRoomSound);

const pain = new AideItem("pain","I'm in pain", 
painImg, painSound);

const food = new AideItem("food","I'm hungry", foodImg, foodSound);

const goOutside = new AideItem("Outside","Go outside", goOutsideImg, goOutsideSound);
                           
const totalItems = [];

totalItems.push(glassOfWater, restroom, thankYou, activityRoom, backToRoom,
    pain ,food , goOutside);

export default totalItems;