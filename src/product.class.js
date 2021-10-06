// Aquí la clase Product

class Product{
    constructor(id,name,price, units=0){
        this.id=id
        this.name = name
        this.price = price
        this.units = units
    }
    changeUnits(units){
        let unidades = this.units
        unidades += units
        if(unidades < 0){
            throw "La cantidad es imposible de calcular"
        }else{
            this.units = unidades 
            return this
        }
    }

    productImport(){
        return this.price*this.units
    }
    toString(){
        return  this.name +': ' + this.units + ' uds. x ' + this.price.toFixed(2) + ' €/u = ' + this.productImport() + ' €' 
    }


}

module.exports = Product;