export class Item {
    constructor(category, description, price) {
        this.category = category;
        this.description = description;
        this.price = price;
        this.tax = 0;
    }

    calculateTax() {
        return this.tax * this.price;
    } 
        
}

export class Beer extends Item {
    constructor(description, price) {
        super("Beer", description, price);
        this.tax = 0.2; 
    }
}

export class Cigar extends Item {
    constructor(description, price) {
        super("Cigar", description, price);
        this.tax = 0.25;
    }
}

export class Eletronics extends Item {
    constructor(description, price) {
        super("Eletronics", description, price);
        this.tax = 0.3;
    }
}

export class Water extends Item {
    constructor(description, price) {
        super("Water", description, price);
    }
}