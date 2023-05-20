import AideItem from "./AideItemModel";

const glassOfWater = new AideItem("water","Water", 
"/assets/Images/WaterGlass.jpg", "/assets/Audio/WaterGlass.mp3");

const restroom = new AideItem("restroom", "Go to the restroom", 
"/assets/Images/Restroom.jpg", "/assets/Audio/Restroom.mp3");

const thankYou = new AideItem("thank you", "Thank you", 
"/assets/Images/Thankyou.jpg", "/assets/Audio/Thankyou.mp3");

const activityRoom = new AideItem("Activity Room", "Go to Activity Room", 
"/assets/Images/ActivityRoom.jpg", "/assets/Audio/ActivityRoom.mp3");

const backToRoom = new AideItem("Bedroom","Go to bedroom",
"/assets/Images/Bedroom.jpg", "/assets/Audio/Bedroom.mp3");

const pain = new AideItem("pain","I'm in pain", 
"/assets/Images/Pain.jpg", "/assets/Audio/Pain.mp3");

const food = new AideItem("food","I'm hungry", "/assets/Images/Food.jpg", "/assets/Audio/Food.mp3");

const goOutside = new AideItem("Outside","Go outside", "/assets/Images/Outside.jpg", "/assets/Audio/Outside.mp3");
                           
const totalItems = [];

totalItems.push(glassOfWater, restroom, thankYou, activityRoom, backToRoom,
    pain ,food , goOutside);

export default totalItems;