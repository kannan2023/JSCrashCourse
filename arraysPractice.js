// // console.log('Hello World'.length);
// // console.log("here we are"[8-3] )
// // celisus to Farenheit
// let celisus = 10;
// let Farenheit = celisus * 1.8 + 32;
// console.log('This is Farenheit ' + Farenheit);
// console.log('-------------------------------------------------');

// let bool = '1' === 1;
// let boo = '2' == true;
// console.log(bool + '  and  '  + boo)
// console.log('-------------------------------------------------');

// //-----------------------------------------------------
// let subscribed = false;
// let loggedin = false ;

// if (subscribed)  {
//     console.log('Show the Video');
// }
//  else if (loggedin) {
//     console.log('ask user to to subscriber');
// } 
// else 
// {
//     console.log('Ask subscriber to login' );
// }
// console.log('-------------------------------------------------');
// //----------------------------------------------------------------
// let cash = 75 ;
// let productprice = 50;
// if (cash > productprice)  {
//     console.log(`you paid more cash so get back the remaining  ${cash - productprice} `)
// }
// else if (cash == productprice) {
//     console.log('you paid exact amount which is  '+ [productprice] + '$, so you dont owe me anything ')
// }
// else {
//     console.log('you have less money which is ' + [cash] + '$, you cannot get this product')
// }
// console.log('-------------------------------------------------');
// //-----------------------------------------------------------------

// cash = 65;
// productprice = 40 ;
// isStoreOpened = true;

// if( cash >= productprice && isStoreOpened){
//     console.log('Print the receipt')
// }
// console.log('-------------------------------------------------');
// if(cash >= productprice && !isStoreOpened){
// console.log('Store is closed. Try some other time ');
// }
// console.log('-------------------------------------------------');
// isStoreOpened = false
// if(cash >= productprice && isStoreOpened == false){
// console.log('Store is closed. Try some other time ');
// }
// console.log('-------------------------------------------------');
// if(cash >= productprice && !isStoreOpened){
// console.log('Store is closed. Try some other time ');
// }
// console.log('-------------------------------------------------');
// console.log('going to check falsy values');
// // falsy values oare undefined/NaN/Zero/empty quotes/ false
// let gg =""
// if (gg){
//     console.log('is falsy value working');
// }
// else {
//     console.log('in IF condition it has falsy value');
// }
// console.log('going to check Truthy values');
// // Truthy values oare 10/3.14/'frontend simplied'/'false'/ "0"/[]/{}
// if ({}){
//     console.log('is trurthy value working');
// }
// else {
//     console.log('in IF condition it has falsy value');
// }
// console.log('-------------------------------------------------');
// console.log('going to check Ternary Operator');
// let obesity = false;
// let checkObesity = obesity ? 'you are eating unhealthy food' : 'You are eating Healthy foods';
// console.log(checkObesity + '   ' + obesity);
// console.log('-------------------------------------------------');
// console.log('going to check another Ternary Operator');
// let subscribe = false;
// let checkSubscribed = subscribe ? 'Show Video' : 'Do not show Video';
// console.log(checkSubscribed+ '    ' + subscribe );
// console.log('-------------------------------------------------');
// console.log('going to check another Ternary Operator');
// cash = 66;
// productprice = 46;
// isStoreOpened = true;
// let str = cash > productprice && isStoreOpened ;
// let str1 = cash < productprice && isStoreOpened
// if(str) {
//     console.log('print the recepit');
// }
// if(!str){
//     console.log('Do not Print the Recepit')
// }
// console.log('-------------------------------------------------');
// console.log('going to check another Ternary Operator');
// cash >= productprice && isStoreOpened ? console.log('print the recepit') : console.log('Do not Print the Recepit') ;
// console.log('-------------------------------------------------');
// let str2 = cash >= productprice && isStoreOpened ? 'print the recepit' : 'Do not Print the Recepit' ;
// console.log('-------------------------------------------------');
// console.log('going to check another Ternary Operator');
// console.log(str2);
// console.log('-------------------------------------------------');
// for (let i=1; i <=20; ++i) {
//      if (i % 3==0 && i % 5 ==0){
//         console.log([i] + '<--Frontend Simplied');
//     }
//     else if(i % 3==0) {
//         console.log([i] + '<--Frontend');
//     }
//     else if(i % 5 ==0) {
//         console.log([i] + '<---Simplified');
//     }
//     else{
//         console.log(i);
//     }
// }
//  str = 'front end simplied';
// for(i=1; i <= str.length-1;i++){
//     console.log(i);
//     console.log(str.length);
// }
// console.log(str.length);
// function covertCelisusToFarenhiet(deg) {
//     // let farenheit = deg * 1.8 + 32; 
//     return deg * 1.8 + 32; 
// }
// const convertedCelisusToFarenheit = (deg) => {
//     return deg * 1.8 + 32 ;
// }

// console.log(covertCelisusToFarenhiet(10));
// console.log(convertedCelisusToFarenheit(10));

// let arr = [1,2,3,4,5,1];
// let newArray =arr.filter((elements) =>{
//     console.log(elements);
//     return elements;
// })
// console.log(newArray);
// // console.log(arr[2]);
// console.log(arr.length);
// // arr.push(6,7);
// // console.log(arr[arr.length-1] );
// // console.log(arr);
// // console.log(arr.length);
// arr.filter((elements) => {
//     console.log(elements);
// });

// function logName(name) {
//     console.log('Hello'   + name);
// }

// function greet(callback){
//     const userName = "Hi this is Pals";
//     callback(userName);
// }
// greet(logName)

// function fn(num1, num2,cb){
//     const results = num1 + num2 ;
//     cb(results);
// }

// fn(25,35, Showcb)

// function Showcb(getresult){
//     console.log(' THis is the results    '+ getresult);
// }

// setTimeout(() =>{
//     console.log('a')
// }, 3000)

// function uploadVide(cb) {
//     console.log('Uploading video');
//     setTimeout(() =>{
//         console.log('Upload Completed');
//         cb();    
//     }, 5000)
// }

// function publishingVideo(pubcb) {
//     console.log('Publishing Video');
//     setTimeout(() => {
//         console.log('Publishing Video completed');
//         pubcb();
//     }, 3000)
// }

// function sendNotificationtoSubs() {
//     console.log('Sending Notification');
// }

// uploadVide(function(){
//     publishingVideo(function(){
//         sendNotificationtoSubs();
//     })
// });

// arr = ['A','A+','FAIL','FALL']
// let arrone = ['B','fail','FAIL','FALL']
// let arrtwo = ['FAIL']

// let newarr = arr.filter((elements) => {
    
// })
// arr = 'a23erlkHFGFHFGFj56898';
// let num = arr.split("").filter(ch => /[0-9]/.test(ch))
// let str = arr.split("").filter(ch => /[a-zA-Z]/.test(ch))
// let numone = arr.split("").filter(ch => isNaN(ch))
// let strone =  arr.split("").filter(Caps => /[a-z]/.test(Caps))
// let results = arrtwo.filter((elements) => {
//    if( elements !== 'FAIL') {
//      return true
//    }
// })
// console.log(arrone.filter(elements => elements.toUpperCase() !== 'FAIL'))
// newarr = [];
// console.log (arrone.length);
// for (i=0; i <= arrone.length-1; i++) {
//     console.log(arrone[i])
//     if(arrone[i] !== 'FAIL') {
//         newarr.push(arrone[i])
//     }
// }
// console.log(newarr);
// console.log(results);

// console.log(num);
// console.log(str);
// console.log(numone);
// console.log(strone);
// let arr = [1,3,5,7,9,11];
// let arrnew=[];
// console.log(arr.map(elements => elements * 100));
// for(i=0; i < arr.length; i++) {
//     arrnew.push(arr[i] * 100);
//     console.log(arrnew);
// }