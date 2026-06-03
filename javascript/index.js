var a=10
var ab="30"
var name="sai"
var bool= true
var k
var m=null

console.log(a)
console.log(name)
console.log(bool)
console.log(k)
console.log(m)


// type of operator (it is used to check what kind of data type that has been present in a particular varable)

console.log (typeof (a))
console.log (typeof (ab))
console.log (typeof (name))



// data type 
// 1. primitive data type
// String,number,boolean,undefined,null,bigint,symbol
// 2. referene data type

// 1. primitive data type

// String :- anyting can be "",'',``
var String="hello hii"
var k='hello'
var m=`hello`
var sai= "String"
console.log(String)
console.log(k, typeof(k))
console.log(m, typeof(m))
console.log(sai)

// number:-
var k="90"
var _m = 100
console.log(k, typeof(k))
console.log(_m, typeof(m))

// Boolean(its all about true/false)

var a= true
console.log(a)
var b= false
console.group(b)

// undefined

var abc
console.log(abc)

// null

var n=null
console.log(n)

// all at a time practice
var s= "String"
var n=1
var b=`true`
var u
var k= null
console.log(s, typeof(s))
console.log(n, typeof(n))
console.log(b, typeof(b))
console.log(u, typeof(u))
console.log(k, typeof(k)) // oject 

//bingint
var k=123654789
console.log(k)
var f=10n
console.log(f,typeof(f))


// 2. referene data type- multiple  values can show in a single memory
// Object,arrays,functions,E.S-6 2015 (Map,WeakMap,set weak set),data,regular expression

// object
// collection of key value Pairs and enclosed in{} curly braces
// each key and values will be seperated by :
// ech key value pair will be seperated by ;

var obj={name:"sai",role:"student",city:"hyd",number:9263487159,femail:"true",salary:40000,attendence:{jan:10,feb:20}}
console.log(obj)
console.log(typeof(obj))

// Array

var arr=[1,2,3,4,"hello","hi",true,false,null,[1,54,325,4789,[12,52,34]],{name:"sai"}]
console.log(arr)

//function:- it is a block of code and the it is used to do some task and return some values

function hello() {
    console.log("hi!how are you?")
}
hello()
console.log("hi")

//calculation of salarynbased on no.of working days 

console.log(2000*20)
console.log(2000*19)
console.log(2000*21)

function salary (name,days) {  //parameters
    var perday=2000
console.log("monthly salary of",name,"is",perday*days)
//console.log("execution completed")
return perday*days
}
salary("sai",20) //argument
salary("kiran",21) 
console.log(salary("kiran",21))

console.log ("all the salaries are calculated")

console.log(3000*9)

//map:- 

var c = new Map() 
console.log(c)


