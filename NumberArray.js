let numar=[10,20,30,40,5]
for( let num of numar)
    {
        console.log(num)
    }
    let sum=0
    for(let i=1;i<numar.length;i++)
    {
         sum+=numar[i]
//console.log(numar[3])
    }
   
  
   console.log(sum)
   console.log("Sum of array using reduce method")
   let total=numar.reduce((p,c)=>p+c,5)
console.log(total)
let filterarray=numar.filter(n=>n%2==0)
console.log(filterarray)
let doublearray=numar.map(n=>n*2)
console.log(doublearray)
let arr=[5,10,15]
let multiple=arr.filter(n=>n%5==0).map(n=>n*5).reduce((n,m)=>n+m)
console.log(multiple)