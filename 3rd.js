 //for loop
 for(let i=0;i<5;i++){
    console.log("Sandeep");
 }

 //while loop
 let i=1;
 while(i<=10){
    console.log("i=",i);
    i++
 }

 //do while loop

 let j=1;
 do{
    console.log("j=",j);
    j++;
 } while(j<=5);


 //for of loop

 let str="Sandeep";

 for(let i of str){
    console.log("i=",i);
 }

 //for in loop

 let student={
    name:"Sandeep",
    age:21,
    cgpa:9,
    isPass: true,
 };

 for(let key in student){
    console.log("Key=",key, "Value",student[key]);
 }

 //Strings

 let str2="SandeepKumar";
 console.log(str2)
 console.log(str2.length);
 console.log(str[2]);


 //template literal

 let specialliteral=`This is a template literal`;
 console.log(specialliteral);
 let obj={
    item:"Pen",
    price:10,
 };
 console.log("the cost of",obj.item,"is",obj.price,"rupees");

 //q1
 let string=prompt("Enter the User Name");
 let UserName=`@${string}${string.length}`
 console.log(UserName);