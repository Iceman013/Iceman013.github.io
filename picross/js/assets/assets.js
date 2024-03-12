import { Background } from "./background.js"

const BACKGROUNDS = [
    new Background(1, "Class 1", "class1", "backgrounds/class1.jpg"),
    new Background(2, "Class 2", "class2", "backgrounds/class2.jpg"),
    new Background(3, "Gym", "gym", "backgrounds/gym.jpg"),
    new Background(4, "Library", "library", "backgrounds/library.jpeg"),
    new Background(5, "Janitor's Closet", "closet", "backgrounds/closet.jpg"),
    new Background(6, "Restroom", "bathroom", "backgrounds/bathroom.jpeg"),
    new Background(7, "Garden", "garden", "backgrounds/garden.jpg"),
    new Background(8, "Roof", "roof", "backgrounds/roof.jpg"),
    new Background(9, "Hallway", "hallway", "backgrounds/hallway.png"),
    new Background(10, "Upper Hallway", "hallway2", "backgrounds/hallway2.jpg"),
    new Background(11, "Cafeteria", "cafeteria", "backgrounds/cafeteria.jpg"),
];

export function getBackground(shortName) {
    let out = "images/";
    for (let i = 0; i < BACKGROUNDS.length; i++) {
        if (shortName == BACKGROUNDS[i].shortName) {
            out = out + BACKGROUNDS[i].url;
            i = BACKGROUNDS.length;
        }
    }
    return out;
}