class CoffeeMachine
{
    #boilwater()
    {
        console.log("boil water")
    }
    #addmilk()
    {
console.log("add milk")
    }
    #addsugar()
    {

        console.log("add sugar")
    }
    #addcoffeepowder()
    {
        console.log("add coffee powder")
    }
    #addteapowder()
    {
        console.log("add tea powder")
    }
    makecoffee()
    {
this.#boilwater()
this.#addmilk()
this.#addcoffeepowder()
this.#addsugar()
console.log("coffee ready")
    }
    maketea()
    {
this.#boilwater()
this.#addmilk()
this.#addteapowder()
this.#addsugar()
console.log("tea is  ready")

    }
}

const coffeeobj=new CoffeeMachine()
coffeeobj.makecoffee()
coffeeobj.maketea()




