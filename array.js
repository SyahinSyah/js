var points = [40, 100, 1, 5, 25, 10];
var pointsDua = [30, 12,2,5,10];



console.log("foreach loop array ");
points.forEach(loop);
console.log("foreach loop string");
points.forEach(loopString);
console.log("foreach loop darab 10 ");
var xdarab = points.map(darab);
console.log(xdarab);
console.log("foreach loop filter ");
var xfilter = points.filter(filter);
console.log(xfilter);
console.log("foreach loop sum using reduce ");
var sum = pointsDua.reduce(sumall);
console.log(sum);


function loop(value)
{
    
    console.log(value);
    // 
}

function loopString(value)
{
    var y = "" ;
    console.log(y+value);
}

function darab(value,index,array)
{
    return value*10;
}

function filter(value)
{
    return value>19;
}

function sumall(total,value)
{
    return total+value;
}
