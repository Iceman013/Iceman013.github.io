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

        this.list = [];
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
        
        this.update();
    }

    update() {
        this.list[0] = this.Moth;
        this.list[1] = this.Butterfly;
        this.list[2] = this.Spider;
        this.list[3] = this.Aphid;

        this.list[4] = this.QueenBee;
        this.list[5] = this.Cockroach;
        this.list[6] = this.Ant;
        this.list[7] = this.Worm;

        this.list[8] = this.Mosquito;
        this.list[9] = this.Beetle;
        this.list[10] = this.Gnat;
        this.list[11] = this.DungBeetle;

        this.list[12] = this.Firefly;
        this.list[13] = this.Ladybug;
        this.list[14] = this.Fly;
        this.list[15] = this.Centipede;
    }
}