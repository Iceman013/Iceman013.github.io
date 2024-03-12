import { Popular } from "./popular.js";

export class Conditions {
    // none, Class 1, Post C1, Hallway, Upper Hallway, Cafeteria, Bathroom, Closet, Roof, Class 2, Post C2, Library, Gym, Garden, Home
    /**
     * 
     * @param {number} classA 0 default, 1 front, 2 back
     * @param {number} classB 0 default, 1 front, 2 back
     * @param {number} day 0 default
     * @param {Array.<String>} events Events (Class 1, Post C1, Hallway, Upper Hallway, Cafeteria, Bathroom, Closet, Roof, Class 2, Post C2, Library, Gym, Garden, Home)
     * @param {Popular} popularity Popularity required to do this (0s by default)
     */
    constructor(classA=0, classB=0, day=0, events=[], popularity=new Popular()) {
        this.classA = classA;
        this.classB = classB;
        this.day = day;
        this.events = events;
        this.popularity = popularity;
    }
}