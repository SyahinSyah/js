const person = {
    firstname: "syahin",
    lastname:   "syah"
}


const {lastname} = person;
console.log(lastname);


const names = ["james" , 2,3 ];
const b =["2" ,3,3] ;

const all = [...names, ...b];

console.log(all);

//can use for copy or object