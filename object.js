// const circle = {
//     radius: 1,  //ni adalah propety
//     location : {
//         x:1 , 
//         y:2,
//     },
//     draw: function() { // ni adalah method
//         console.log('draw');
//     }
// };
// circle.draw();


// factory function 
function createCircle(radius)
{
    return {
        radius,  //ni adalah es6 shorthand
        draw: function() { // ni adalah method
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
console.log(circle.constructor);
// circle.draw();


//Constructor function  , kena guna this = > new , dengan this
function Circle(radius)
{
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
} 

const another = new  Circle(1);
// circle.draw();
console.log(another.constructor);
