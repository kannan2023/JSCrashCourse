let users = [
    {
        userName:"Pals",
        emailId: "pals@frontendsimplified.com",
        password:"ppals19",
        subscriptionStatus:"VIP",
        discordId:"ppals19",
        lessonsCompleted:[0,1,2,3],

    },
    {
        userName:"Arvin",
        emailId: "arvin@frontendsimplified.com",
        password:"arvin19",
        subscriptionStatus:"VIP",
        discordId:"arvin24",
        lessonsCompleted:[0,1],

    },
    {
        userName:"Alex",
        emailId: "alex@frontendsimplified.com",
        password:"alexgreat",
        subscriptionStatus:"VIP",
        discordId:"alex45",
        lessonsCompleted:[0,1,2,3,4,5],

    }
]   

for(i=0; i < users.length ; i++) {

}
function login(userName, password){
    
    for(i=0; i < users.length; i++){
        console.log(i);
        if (users[i].password === password && users[i].userName === userName){
            console.log(users[i].userName + '   ' + users[i].password);
        }
        else{
            console.log('Either Name or password is wrong')
        }
        return
    }
}
login('Pals','ppals19')
insertDatatoArray('Kannan','kannan@frontendsimplified.com','kannan19','VIP','kan1971',[0,1,2,3]);
console.log(users);
function insertDatatoArray(Name,email,pwd,subsStatus,discord,lessonsComp) {
    users.push(
        {
            userName: Name,
            emailId:email,
            password:pwd,
            subscriptionStatus:subsStatus,
            discordId:discord,
            lessonsCompleted:lessonsComp
        }
    )
}