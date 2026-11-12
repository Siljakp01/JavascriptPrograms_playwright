function display(result)
{
    console.log("result is "+result)
}

function findaverage(mark1,mark2,mark3,callback)
{
    var average = (mark1 + mark2 + mark3) / 3;
    callback(average);
}
findaverage (80, 90, 100, display)  
function findsum(num1,num2,callback)
{
    var sum = num1 + num2;
    callback(sum);
}
findsum(10,20,display)