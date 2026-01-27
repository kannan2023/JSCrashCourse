// import fetch from 'node-fetch'

const strss    = document.querySelector('.showStareres');
const postt = document.querySelector('.posts');
const postones = document.querySelector('.postones');
// const emailReg = document.querySelector('.email');

function addCustomString(str){
    console.log(str + 'Frontend');
    fr ='Frontend' ;
    return str + fr ;
}

addCustomString('Banana')

function checkTheNumber(num){
    console.log('Thue number sent is ' + num)
    return num <= 0
}

console.log(checkTheNumber(50));

function returnOpp(boos){
    return !boos
}

console.log(returnOpp(true))

function returnBooleaan(vars){
    return vars != 0 ? true : false
    //     return vars !== 0

}
console.log(returnBooleaan('hihihih'))

function calcReminder(num){
    console.log(num % 2);
    // return (num % 2 ===0 ? true : false );
        return num % 2 ===0 ;
}

console.log(calcReminder(30));

function calcEven(num){
    console.log(num / 2);
    // return (num % 2 ===0 ? true : false );
        return num % 2 ===0 ? 1 : -1;
}

console.log(calcEven(31));
function isLoggedInAndSubscribed(logged, subs){
    let loggy = 'LOGGED_IN';
    let loggyOut = 'LOGGED_OUT';
    let subsy = 'SUBSCRIBED';
    let unSubsy = 'UNSUBSCRIBED';

    return loggy === logged && subsy === subs 

}

console.log(isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED'))

function FalsyOrTruthy( num1, num2 ){
    console.log('-------------------->' + !num1);
    return (!num1) ? num1 : num2
}
console.log(FalsyOrTruthy(null,500))
function arrLength(arr){
    return arr[arr.length -1]
}
console.log(arrLength([0,3,5,7,9]));

function arraySum(arr){
    let j = 0;
    for(i=0; i< arr.length ; i++){
        j += arr[i]
        console.log('THE SUM OF ARRAY IS---.' + j );
    }
    return j;
}

console.log('----------------------------->'+ arraySum([2,4,5,3,4]))

function addUpTheNumbers(num){
    let j = 0;
    for (i=num;  i >= 0 ; i--){ // or
        // for( i=1 ; i <= num ; i++){ j += num}
        j += i;
        console.log(i)
    }
    return j;
}
console.log(addUpTheNumbers(4));


function convertSecondsToMMSS(num){
    const toMMSS =  String(Math.floor( num  / 60)).padStart(2,"0") + ':' + String(num % 60).padStart(2,"0");
    console.log(toMMSS);
    return toMMSS;
}

console.log(convertSecondsToMMSS(500));

function getMax(numArr){
    j = 0;
    // for (i=0; i < numArr.length ; i++){
    //     if ( numArr[i] > j) {
    //         j = numArr[i]
    //     }
    // }
    j = Math.max(...numArr);
    console.log(j);
    return j;
}

console.log(getMax([0, -100, -200,1]));

function reverseAString(strs){
    let st ='';
    // for( i=strs.length-1 ; i >= 0 ; i-- ){
    //     st += strs[i];
    // }
    // for(i =0 ; i< strs.length; i++){
    //     st = strs[i] + st
    // }
    st = strs.split('').reverse().join('');
    return st
}
console.log('Pals' + '-------------->' + reverseAString('Pals'))

function convertAllNumToZero(numArray){
    // j = 0 ;
    // retnArray = [];
    // for(i=0; i < numArray.length; i++){
    //     retnArray.push(0); 
    // }
    // return retnArray
    // return new Array(numArray.length).fill(0);
    return numArray.map(elem => 0)
}
console.log(convertAllNumToZero([23,45,67,8,9,0]));

function filterFruits(whichFruit){
    // return whichFruit.filter(wA => wA.includes('apple'))
    //return whichFruit.filter(wA => wA !== String('apple'))
    j =[]
    for (i=0; i < whichFruit.length ; i++){
        if(whichFruit[i] !== 'apple'){
            j.push(whichFruit[i]);
        }
   }
    return j;
}

console.log(filterFruits(['apple','apple','grapes']))

if(0) console.log('it runs');
if(true) console.log('it runs');
if("") console.log('it runs');
if(undefined) console.log('it runs');
if(-0) console.log('it runs');
if(1) console.log('it runs');

function filterOutFalsy(val){
    // return vlues.filter(Boolean);
    // j = [];
    // for (i=0; i < values.length ; i++){
    //     if(values[i] == Boolean){
    //         console.log(values[i]);
    //         j = values[i];
    //     }
    // }
    // return j;
    // return val.filter(vals => Boolean(vals))
    return val.filter(Boolean);
}

console.log(filterOutFalsy([0,-0,1,2,3,4,-5,undefined, NaN]))

function returnTrueNFalse(valueArray){
    //  return valueArray.filter(vA => vA ? true : false)
    // j=[];
    // for(i=0 ; i < valueArray.length ; i++){
    //     if(Boolean(valueArray[i])){
    //         j.push(true)
    //         console.log('it came right');
    //     }
    //     else {
    //         j.push(false);
    //     }
    // }
    // return j
    return valueArray.map(elements => !! elements)
}

console.log(returnTrueNFalse([0,-0,2,4,undefined,NaN]))

function showStarsinReview(num){
// const strss = document.querySelector('.showStars')
// if (!strss) return '';
console.log(document.querySelector('.showStareres')); // null or element
    let showStars ='';
    for(i=0; i<=Math.floor(num-1) ; i++){
        showStars += '*';
        console.log(showStars);
    }
    if(!Number.isInteger(num)){
        showStars += ' .'
    }
     strss.innerHTML = showStars
     strss.style.fontSize = '40px';
    return showStars
}
console.log(showStarsinReview(2.5));

function sortingAscending(numArray){
    numArray.sort((a,b) =>(b-a))
    return numArray
}

console.log(sortingAscending([55,21,11,55,56,90,-11]))

function sortingAscendingObject(numArray){
    numArray.sort((a,b) =>(a.Price- b.Price))
    return numArray
}

console.log(sortingAscendingObject([
    {
        id: 1,
        Price: 2000,
        name: 'Pals',
    },
    {
        id: 5,
        Price: 1000,
        name: 'Pals',
    },
    {
        id: 2,
        Price: 500,
        name: 'Pals',
    }
]))

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
promise
.then(res => res.json())
.then(user => console.log('this is the user     '+ user.title))
console.log('Syncronous');

const posts = [
    { title: 'Post One ', body :'This is the post One'},
    { title: 'Post Two ', body :'This is the post Two'}
]
const postone = [
    { title: 'Post One ', body :'This is the post One'},
    { title: 'Post Two ', body :'This is the post Two'}
]
function getPosts(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        // document.body.innerHTML = output;
        console.log(output);
        postt.innerHTML = output;
    }, 1000)
}
// getPosts()

function createPost(post, cb1){
    setTimeout(()=> {
            posts.push(post);
            cb1();
    },2000)
}
createPost({ title: 'Post Three ', body :'This is the post Three'}, getPosts)

function getPostsTwo(){
    setTimeout(()=>{
        let output ='';
        postone.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        // document.body.innerHTML = output;
        console.log(output);
        postones.innerHTML = output;
    }, 1000)
}
// getPosts()

function createPostTwo(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=> {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error Something went wrong');
            }},2000)
    })
}
createPostTwo({ title: 'Post Three ', body :'This is the post Three'}).then(getPostsTwo);