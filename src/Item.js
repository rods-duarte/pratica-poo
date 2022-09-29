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
    constructor(category, description, price) {
        super(category, description, price);
        this.tax = 0.2; 
    }
}

export class Cigar extends Item {
    constructor(category, description, price) {
        super(category, description, price);
        this.tax = 0.25;
    }
}

export class Eletronics extends Item {
    constructor(category, description, price) {
        super(category, description, price);
        this.tax = 0.3;
    }
}

export class Water extends Item {
    constructor(category, description, price) {
        super(category, description, price);
    }
}