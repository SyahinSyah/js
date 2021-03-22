// Synchronous

const getUserSync = require('/src/getUserSync');

const userSatu = getUserSync(1);
console.log(userSatu); //contoh pesan nasi goreng


const userDua = getUserSync(2); 
console.log(userDua); //pesan air

const halo = 'hello'; //tanya password wifi
console.log(halo);


//Asynchronous 

const getUser = require('./src/getUser');

const userSatu = getUser(1, (user) => 
{
    console.log(user);
});

const userDua = getUser(2, (user) => 
{
    console.log(user);
});

const halo ='Hellow World';
console.log(halo);