var car = { 
    type:"fiat",
    model:"500",
    color:"white" 
};

var x = [
    "jon",
    "cina",
    "test"
];

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

var y = x.splice(2,0,"sayang","tak sayang");

var points = [40, 100, 1, 5, 25, 10];

points.forEach(loop);

function loop(value)
{
    var x = " " ;
    console.log(x+value);
 
}

console.log(points);