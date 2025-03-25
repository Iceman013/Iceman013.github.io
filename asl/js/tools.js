/**
 * Picks a random element in an array
 * @param {Array} list Array of items to chose from
 * @returns Element
 */
export function getRandom(list) {
    return list[Math.floor(list.length*Math.random())];
}