var a=1;
var b=3;
var sum=a+b;
console.log(sum)
let c=8
const name="hello"

/*console.log(name)
console.log(typeof name)*/
const cars=["hi","hello"]
cars.push("tesla")
/*console.log(cars)
console.log(cars[2])*/
const person={
    name:"John Doe",
    age:30,
    isStudent:false,
    hobbies:["reading","writing"]
}
//console.log(person.age)
const ages=[10,12,15,20,24]
const result=ages.filter(check)
function check(age){
    return age<=18
}
var prompt=require('prompt-sync')()
console.log(result)
const age=prompt("please enter your age")
if(age<18){
    console.log("underage")
}
function add(a,b){
    return a+b
}
var res=add(2,4)
var add=(a,b)=>{return a+b}
var add=(a,b)=>a+b
console.log(result)
function callback(){
    console.log("this is a callback function")
}
const adds=function(a,b,callback){
    console.log(a+b)
    callback()
}
adds(1,2,callback)
const subtract=(a,b,call)=>{
    console.log(a-b)
    call()
}
subtract(10,2,()=>{
    console.log("subtraction done")
})
//to convert json to object JSON.parse(jsonString)
//to convert object to json JSON.stringify(objectToConvert)

