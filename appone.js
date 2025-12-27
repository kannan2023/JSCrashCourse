// function login (userName, Passwrd){
//     return new Promise((resolve, reject) => {
//         console.log('Checking Credentials');
//         setTimeout(() => {
//             const correctUser = 'Meena';
//             const correctpassword = 'secret123';
//             if (correctUser === userName && correctpassword === Passwrd) {
//                 resolve({
//                     id: 1,
//                     user: 'Meena',
//                     role:'Admin',
//                     subscriptionStatus:'VIP',
//                     VideoPlay: 'FREE'
//                 })

//             }
//             else {
//                reject(new Error('Invlaid User Name or Password'));
//             }
//         }, 2000)
//     });
// }

// function login(userName, Password) {
//     return new  Promise((resolve, reject) => {
//         console.log('Checking Credentials');
//         setTimeout(() => {
//             const correctUser = "Meena" ;
//             const correctpassword = 'Secret123' ;
//             if(correctUser === userName && correctpassword === Password) {
//                 resolve({
//                     id: 1,
//                     user:'Meena',
//                     role:'Admin',
//                     subscriptionStatus: 'VIP'
//                 })
//             }
//             else
//             {
//                 reject(new Error('Invliad UserName or Password'));
//             }
//         }, 3000)
//     })
// }

// login('Meena','Secret123').then(userss => { console.log('Logged in '+ userss)}) 

// async function handleLogin(){
//     try{
//         const user = await login('Meena','Secret123');
//         console.log('Logged in as  ' + user.user)

//     }
//     catch(err) {
//         console.log( 'Login Error' + err.message )
//     }
// }
// handleLogin();

function login(userName,pwd) {
    return new Promise((resolve,reject) => {
        console.log('Checking the Credentials');
        const correctUser = 'Meena'
        const correctpassword = 'secret@123'
        if (correctUser === userName && correctpassword === pwd){
                resolve({
                    id: 1,
                    user:'Meena',
                    role:'Admin'
                })
        }
        else
        {
            reject(new Error('Login Error'))
        }
    })
}

async function handleLogin() {
    
    try {
        const callUser = await login('Meena','secret@123')
        console.log('Logged in as '+ callUser.user + 'and the role is ' + callUser.role)
    }
    catch(err){
            console.log(err.message)
    }
    
}

handleLogin()