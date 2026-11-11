class BankAccount
{
    #balance
    constructor(accntHolder,initialBalance)
    {
        this.accntHolder=accntHolder
        this.#balance=initialBalance

    }
getBalance()
{
console.log(this.#balance)

}

deposit(amount)
{
  this.#balance+=amount
}
withdraw(amount)
{
    this.#balance-=amount
}

}
const BankAccountobj=new BankAccount("Silja",10000)
BankAccountobj.accntHolder="Kiran"
console.log(BankAccountobj.accntHolder)
//BankAccountobj.#balance=20000
BankAccountobj.getBalance()
BankAccountobj.deposit(500)
BankAccountobj.getBalance()
BankAccountobj.withdraw(200)
BankAccountobj.getBalance()

