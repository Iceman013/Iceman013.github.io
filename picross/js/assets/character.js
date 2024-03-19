import { Emotion } from "./emotion.js";

export class Character {
    /**
     * 
     * @param {number} id 
     * @param {String} name 
     * @param {String} folder
     * @param {number} threshold
     */
    constructor(id, name, folder, threshold) {
        this.id = id;
        this.name = name;
        this.folder = folder;
        this.threshold = threshold;
        this.emotions = [];

        this.supportLines = [];
        this.winLines = [];
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

    /**
     * 
     * @param {String} line
     */
    addSupport(line) {
        this.supportLines.push(line);
    }

    /**
     * 
     * @param {Array.<String>} lines
     */
    addSupport(lines) {
        this.supportLines = this.supportLines.concat(lines);
    }

    /**
     * 
     * @param {String} line
     */
    addWin(line) {
        this.winLines.push(line);
    }

    /**
     * 
     * @param {Array.<String>} lines
     */
    addWin(lines) {
        this.winLines = this.winLines.concat(lines);
    }

    getSupport() {
        let r = Math.floor(this.supportLines.length*Math.random());
        return this.supportLines[r];
    }

    getWin() {
        let r = Math.floor(this.winLines.length*Math.random());
        return this.winLines[r];
    }
}