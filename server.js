class Computer {
    constructor(name) {
        this._name = name;
        this._amount = 0;
    }
    get name() {
        return this._name
    }
    get amount() {
        return this._amount
    }
    countAmount() {
        this._amount++
    }
}
class CompanyName extends Computer {
    constructor(name, type) {
        super(name)
        this._type = type
    }
    get type() {
        return this._type
    }
    addType(newType) {
        this.type.push(newType)
    }
}
const company1 = new CompanyName('Apple', [])
company1.addType('Macbook')
company1.countAmount()
company1.countAmount()
const company2 = new CompanyName('Dell', [])
company2.addType('Desktop')
company2.countAmount()
const company3 = new CompanyName('Asus', [])
company3.addType('Laptop')
company3.countAmount()
const company4 = new CompanyName('SamSung', [])
company4.addType('Laptop')
company4.countAmount()
const company5 = new CompanyName('MSI', [])
company5.addType('Laptop')
company5.countAmount()

console.log(company1.name)
console.log(company1.type)
console.log(company1.amount)

console.log(company2.name)
console.log(company2.type)
console.log(company2.amount)

console.log(company3.name)
console.log(company3.type)
console.log(company3.amount)

console.log(company4.name)
console.log(company4.type)
console.log(company4.amount)

console.log(company5.name)
console.log(company5.type)
console.log(company5.amount)