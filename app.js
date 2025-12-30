 const emailReg = document.querySelector('.email');
 const subsstatus = document.querySelector('.status')
// console.log(emailReg);
// console.log(fetch('http://jsonplaceholder.typicode.com/users/1'));
// fetch('http://jsonplaceholder.typicode.com/users/1').then((response) => {
// //     response.json().then (data => {
// //         emailReg.innerHTML = data.email;
// //         console.log(data);

// //     }
// // )
// return response.json();
// }).then((data) => {
//     console.log(data);
//     emailReg.innerHTML = data.email;
// })

// async function main() {
//     const resp = await fetch('http://jsonplaceholder.typicode.com/users/1');
//     // console.log(resp.json());    
//     const data = await resp.json()
//     console.log(data);
//     emailReg.innerHTML =  data.email;
// }

// main();

function getSubscriptionStatus(){
    return new Promise((resolve, reject) => {
        resolve('VIP');
        setTimeout(() => {
            resolve('VIP')}, 10000)
    })
}
getSubscriptionStatus().then(response => console.log(response))
async function maintwo() {
    const status = await getSubscriptionStatus()
    subsstatus.innerHTML =  status;    
}
// maintwo()
// // console.log(getSubscriptionStatus())

// async function getNumber(){
//     return 100
// }
// async function Main(){
// console.log(await getNumber());
// }
// Main()

async function getUser() {
    return {
        id: 1,
        name: 'Pals',
        city:'Atlanta'    
    }
}
getUser().then (user => console.log(user));

async function getUsers() {
    return Promise.resolve({
        id: 1,
        name: 'PalsPalaniappan',
        city:'Atlanta'    
    })
}
getUsers().then(console.log);