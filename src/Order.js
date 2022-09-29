export class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    getTaxes() {
        return this.items.reduce((total, item) => total + item.calculateTax(), 0);
    }
}