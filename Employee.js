export class Employee
{
    constructor(empID,empName)
    {
    this.empID=empID
    this.empName=empName
    }
    responsibility()
    {
        console.log("Teacher")
    }
Printdisplay()
{
    console.log(`${this.empID + this.empName}`)
}
}