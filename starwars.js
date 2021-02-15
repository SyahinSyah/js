const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


// //Filter

// const greater100characters = characters.filter( (character) => character.mass > 100 );
// console.log(greater100characters);

// const shorterCharacters = characters.filter( (character) => character.height <200 );
// // console.log(shorterCharacters);

// const maleCharacters = characters.filter( (character) => character.gender ==='male');
// // console.log(maleCharacters);

// const femaleCharacters = characters.filter( (character) => character.gender === 'female');
// // console.log(femaleCharacters);


// //Map

// const allName =characters.map( (charater) => charater.name);
// console.log(allName);


// const allHeigt =characters.map( (charater) => charater.height);
// console.log(allHeigt);



// const objectNameandHeight =characters.map( (charater) => ({
//     name: charater.name,
//     height: charater.height 
// }));
// // console.log(objectNameandHeight); 


// const firstName = characters.map( (character) =>
//     character.name.split(" ")[0]
// );

// // console.log(firstName);

// //Some

const oneMaleCharacter = characters.some( (character ) => character.gender ==='male');
console.log(oneMaleCharacter);

// const oneBlueCharacter = characters.some( (character) => character.eye_color ==='blue');
// console.log(oneBlueCharacter);

// const oneTallerthan210 = characters.some( (character) => character.height>210);
// console.log(oneTallerthan210);

//Sort

// const sortByName = characters.sort( (a,b) =>
// {
//     if(a.name < b.name)
//     {
//         return -1;
//     }
//     return 1;
// });
// console.log(sortByName);

// const sortByHeight = characters.sort( (a,b) => a.height-b.height );
// console.log(sortByHeight);

// const sortbyFemale = characters.sort( (a,b) => 
// {
//     if(a.gender ==="female") return -1;
//     return 1;
// });

// console.log(sortByHeight);


//Reduce 

//soalan 
// get total mass of all characters. 
// const sumAllMass = characters.reduce((acc, cur) => {
//    return acc + cur.mass;
// },0); // reduce(a , b)

// console.log(sumAllMass);

// const charactersByEyeColor = characters.reduce( (acc, cur) => 
// {
//     // console.log(acc[cur.eye_color]);
//     if(acc[cur.eye_color]){
//         acc[cur.eye_color] = acc[cur.eye_color] +1 
//     }else
//     {
//         acc[cur.eye_color] =1;
//     }
//     return acc;
// } , {}); //empty object

// console.log(charactersByEyeColor);


// const totalName = characters.reduce( (acc , cur ) => {
//     if(acc[cur.name])
//     {
//         acc[cur.name]++;
//     }
//     else
//     {
//         acc[cur.name]=1;
//     }
//     return acc;
// },{});

// console.log(totalName);


//EVERY
// const allBlueEyes = characters.every( (charater ) => {
//     return characters.eye_color === 'blue';
// });

// console.log(allBlueEyes);

// const allmassmorethan40 = characters.every( (character) => character.mass >40 );
// console.log(allmassmorethan40);