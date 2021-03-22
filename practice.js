//Synchronous 

// const getUserSync = (id) => 
// {
//     // let name = '' ;
//     // if(id ===1 )
//     // {
//     //     name ='Sandika';
//     // }
//     // else
//     // {
//     //     name ='saya';
//     // }

//     const name = id === 1 ? 'Sandhika' : 'Galih' 

//     return { 
//        id,
//        name,
//     }
// };


// const userSatu = getUserSync(1);
// console.log(userSatu);


// const userDua = getUserSync(3);
// console.log(userDua);

// const halo = 'hellow world'; 
// console.log(halo)


//Asynchorous 

const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() =>{
        const name = id === 1 ? 'syahin' : 'syah' ;
        callback({id,name});
    }, time); //parameter kedua berapa lama detik
};    

const userSatu = getUser(1,(hasil) => {
    console.log(hasil);
});

const userDua = getUser(2,(hasil) => {
    console.log(hasil);
});

const hello = "hellow world";
console.log(hello);