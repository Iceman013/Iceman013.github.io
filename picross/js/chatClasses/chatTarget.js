import { Popular } from "./popular.js";
import { Conditions } from "./conditions.js";

export class ChatTarget {
    constructor(target, text, popular = new Popular(), setCondition = new Conditions()) {
        this.target = target;
        this.text = text;
        this.popular = popular;
        this.conditionChange = setCondition;
    }
}