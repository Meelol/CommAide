export default class AideItem{
    constructor(title, text, imgURL, voiceFile){
        this.title = title;
        this.text = text;
        this.imgURL = imgURL;
        this.voiceFile = voiceFile;
    }
    setImgURL(url) {
        this.imgURL = url;
    }

    setVoiceFile(voiceFile){
        this.voiceFile = voiceFile;
    }

    getImageUrl(){
        return this.imgURL;
    }

    getVoiceFile(){
        return this.voiceFile;
    }
}