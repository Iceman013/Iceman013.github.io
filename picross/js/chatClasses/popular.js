export class Popular {
    /**
     * Gives points for a character liking you.
     * @param {number} Moth 
     * @param {number} Butterfly 
     * @param {number} Spider 
     * @param {number} Aphid 
     * @param {number} QueenBee 
     * @param {number} Cockroach 
     * @param {number} Ant 
     * @param {number} Worm 
     * @param {number} Mosquito 
     * @param {number} Beetle 
     * @param {number} Gnat 
     * @param {number} DungBeetle 
     * @param {number} Firefly 
     * @param {number} Ladybug 
     * @param {number} Fly 
     * @param {number} Centipede 
     */
    constructor(
        Moth=0, Butterfly=0, Spider=0, Aphid=0,
        QueenBee=0, Cockroach=0, Ant=0, Worm=0,
        Mosquito=0, Beetle=0, Gnat=0, DungBeetle=0,
        Firefly=0, Ladybug=0, Fly=0, Centipede=0) {

            this.Moth = Moth;
            this.Butterfly = Butterfly;
            this.Spider = Spider;
            this.Aphid = Aphid;

            this.QueenBee = QueenBee;
            this.Cockroach = Cockroach;
            this.Ant = Ant;
            this.Worm = Worm;

            this.Mosquito = Mosquito;
            this.Beetle = Beetle;
            this.Gnat = Gnat;
            this.DungBeetle = DungBeetle;

            this.Firefly = Firefly;
            this.Ladybug = Ladybug;
            this.Fly = Fly;
            this.Centipede = Centipede;
        }
}