import AideItem from "./AideItemModel";

const glassOfWater = new AideItem("water","Water",
                "src/assets/Images/WaterGlass.jpg",
                "src/assets/Audio/WaterGlass.mp3");

const restroom = new AideItem("restroom", "Go to the restroom",
                            "src/assets/Images/Restroom.jpg",
                            "src/assets/Audio/Restroom.mp3");

const thankYou = new AideItem("thank you", "Thank you",
                            "src/assets/Images/Thankyou.png",
                            "src/assets/Audio/Thankyou.mp3")

const activityRoom = new AideItem("Activity Room", "Go to Activity Room",
                            "src/assets/Images/ActivityRoom.jpg",
                            "src/assets/Audio/ActivityRoom.mp3")
const backToRoom = new AideItem("Bedroom","Go to bedroom",
                "src/assets/Images/Bedroom.jpg",
                "src/assets/Audio/Bedroom.mp3");
const pain = new AideItem("pain","I'm in pain",
                "src/assets/Images/Pain.jpg",
                "src/assets/Audio/Pain.mp3");

const food = new AideItem("food","I'm hungry",
                "src/assets/Images/Food.jpg",
                "src/assets/Audio/Food.mp3");
const goOutside = new AideItem("Outside","Go outside",
                "src/assets/Images/Outside.jpg",
                "src/assets/Audio/Outside.mp3");
                           
const totalItems = [];

totalItems.push(glassOfWater, restroom, thankYou, activityRoom, backToRoom,
    pain ,food , goOutside);

export default totalItems;