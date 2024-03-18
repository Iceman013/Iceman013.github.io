import { ChatTarget } from "./chatTarget.js";
import { Conditions } from "./conditions.js";

export class Chat {
    /**
     * Creates a dialogue event to be read in the story
     * 
     * @author: Bert
     * @param {number} id ID of the dialogue
     * @param {String} background Background keyword for scene
     * @param {String} character Character talking in scene (none if narrator)
     * @param {String} emotion Emotion of the character talking (none if normal or no character)
     * @param {String} mood Mood for the music and scene as a whole
     * @param {Conditions} conditions Conditions required for chat
     * @param {String} text Text to be stated
     * @param {Array.<ChatTarget>} answers Array of targets to go to
     * @param {number} puzzle Puzzle ID to solve
     */
    constructor(id, background, character, emotion, mood, conditions, text, answers, puzzle=0) {
        this.id = id;
        this.background = background;
        this.character = character;
        this.emotion = emotion;
        this.mood = mood;
        
        this.conditions = conditions;
        this.text = text;
        this.answers = answers;
        this.puzzle = puzzle;
    }
}