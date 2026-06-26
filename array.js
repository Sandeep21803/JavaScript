//Array
let marks=[94,67,89,68,43];
console.log(marks);
console.log(marks.length);

//looping
//for loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

//for of
let cities =["delhi","mumbai","bengaluru","Pune","Gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase());

}

let mark=[25,97,44,37,76,60];
let sum=0;
for(let i=0;i<mark.length;i++){
    sum+=mark[i];
    console.log("Total sum is:",sum);
    console.log('Average is: ',(sum/mark.length)); 


}