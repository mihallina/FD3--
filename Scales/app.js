var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Tomato;
}(Product));
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.products.length; i++) {
            sum += this.products[i].getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.products.length; i++) {
            names.push(this.products[i].getName());
        }
        return names;
    };
    return Scales;
}());
var scales = new Scales();
var apple1 = new Apple('Гренни Смит', 150);
var apple2 = new Apple('Фуджи', 180);
var tomato1 = new Tomato('Черри', 20);
var tomato2 = new Tomato('Бычье сердце', 300);
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
console.log('Суммарный вес:', scales.getSumScale(), 'г');
console.log('Список продуктов:', scales.getNameList());
//# sourceMappingURL=app.js.map