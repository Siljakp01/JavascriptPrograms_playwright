import {
    Animal 
} from "./Animal.js"
class Dog extends Animal
{
    constructor(name,breed)
    {
        super(name)//call the parentcalss constructor
        this.name=name
        this.breed=breed
    }
    bark()
    {
        console.log("Dog is barking")
    }

}

const dogobj= new Dog("Brownie","Dash")
dogobj.bark()
dogobj.eat()

const AnimalObj=new Animal("Kittu")
AnimalObj.eat();



