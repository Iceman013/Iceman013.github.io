export class Sign {
    /**
     * Creates a sign object
     * @param {Array<String>} names Names of the sign
     * @param {Array<String>} categories Categories to label the sign
     * @param {Array<String>} similar Names of signs that are similar in content
     * @param {Array<String>} images Urls of valid gifs of the sign
     */
    constructor(names, categories, similar, images) {
        this.names = names;
        this.categories = categories;
        this.similar = similar;
        this.images = images;
    }
}