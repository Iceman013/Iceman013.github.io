import { Role } from "./role.js";

export class Category {
    /**
     * 
     * @param {String} name Name of the category
     * @param {Array.<Role>} roles List of roles
     */
    constructor(name, roles) {
        this.name = name;
        this.roles = roles;
    }
}