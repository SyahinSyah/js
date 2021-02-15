// old javascript 


// function sayName()
// {
//     console.log("saya");
// }

// sayName();


// var user = {
//     name:'Ed',
//     age:25,
//     sayName:function (){
//         console.log("my name is " + this.name);
//         var fullname = function ()
//         {
//             console.log('my full name is '+ this.name + "age is" + this.age);

//         };
//         fullname();
//     }
// }

// user.sayName();


//es6 

// const sayLocation =  (location) =>  console.log(`my location is unknown ${location}` );

// sayLocation("paris");

const user = {
    name: 'ed',
    age: 25,
    sayName: function(){
        console.log(`my name is ${this.name} and my age is ${this.age}`);
        const fullname =  () => { 
             console.log(`my name is ${this.name}`);
      };
      fullname();
    }
};

user.sayName();