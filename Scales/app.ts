class Product {

    name:string;
    weight:number;

    constructor(_name:string, _weight:number){
        this.name = _name;
        this.weight = _weight;
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;
    }
}

class Apple extends Product{
    constructor(name:string, weight:number) {
        super(name, weight);
    }
}

class Tomato extends Product{
    constructor(name:string, weight:number){
        super(name, weight);
    }
}


class Scales {

    products:Product[] = [];

    add(product:Product):void {
        this.products.push(product);
    }

    getSumScale():number {
        let sum:number = 0;
        for(let i = 0; i < this.products.length; i++){
            sum += this.products[i].getScale();
        }
        return sum;
    }

    getNameList():string[] {
        const names: string[] = [];
        for(let i = 0; i < this.products.length; i++){
            names.push(this.products[i].getName());
        }
        return names;
    }
    
}


const scales: Scales = new Scales();

const apple1 = new Apple('Гренни Смит', 150);
const apple2 = new Apple('Фуджи', 180);
const tomato1 = new Tomato('Черри', 20);
const tomato2 = new Tomato('Бычье сердце', 300);

scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);

console.log('Суммарный вес:', scales.getSumScale(), 'г');
console.log('Список продуктов:', scales.getNameList());