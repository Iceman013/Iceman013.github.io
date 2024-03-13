import { Emotion } from "./emotion.js";

export class Character {
    /**
     * 
     * @param {number} id 
     * @param {String} name 
     * @param {String} folder
     */
    constructor(id, name, folder) {
        this.id = id;
        this.name = name;
        this.folder = folder;
        this.emotions = [];
    }

    /**
     * 
     * @param {Emotion} emotion 
     */
    addEmotion(emotion) {
        this.emotions.push(emotion);
    }

    /**
     * 
     * @param {String} name 
     * @returns Target emotion object
     */
    getEmotion(name) {
        let out;
        for (let i = 0; i < this.emotions.length; i++) {
            if (this.emotions[i].name == name) {
                out = this.emotions[i];
                i = this.emotions.length;
            }
        }
        return out;
    }
}