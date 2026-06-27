//function creation

function myFunction(){
    console.log("I am god of the world");
    console.log("Binod");
    console.log("Learning JS Baby");


}

//function Calling

myFunction();

//function parameter

function sum(x,y){
    console.log(x+y);
}

//arrow function
const arrowSum=(a,b)=>{
    console.log(a+b);
};

//count Vowels

function countVowels(str){
    let count=0;
    for(const char of str){ 
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }

    }
    return count;
}

// arrow function count vowels
const countVow=(str)=>{
    let count=0;
    for(const char of str){ 
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }

    }
    return count;

}

//foreach

let arr=[1,2,3,4,5,6,7];
arr.forEach(function printVal(val){
    console.log(val);
});

//map
let num=[1,2,3,4,5];
num.map((val)=>{
    console.log(val);
});

//filter

let nums=[1,2,3,4,5];
let evenArr=arr.filter((val)=>{
    return val % 2===0;
});
console.log(evenArr);
//reduce
let arr1=[1,2,3,4];
const output=arr1.reduce((res,curr)=>{
    return res+curr;
});

console.log(output);