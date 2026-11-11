const car={
    colour :'red',
    brand :'skoda',
    price:1500000,
    isautomate:true,
    features:["5 seater","feature 2"],
    engine:{//nested object
        type: "diesel",
        power:145
},
details: function(){
    console.log(this.colour)
    console.log(this.brand)
} 
}
console.log(car.colour)
console.log(car.features[1])
console.log(car.engine.power)
car.details()
import data from "./Data.json" with{type: 'json'} 
const dataString=JSON.stringify(data)//converted to jsonstring
const datajs=JSON.parse(dataString)
console.log(datajs.brand)