export class Character {
    /**
     * 
     * @param {number} id 
     * @param {String} name 
     * @param {String} emotion
     * @param {String} url 
     */
    constructor(id, name, emotion, url) {
        this.id = id;
        this.name = name;
        this.emotion = emotion;
        this.url = url;
    }
}