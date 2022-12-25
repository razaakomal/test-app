// Variables:  var, let ,const

// String Methods

let str = "komal raza is a frontend developer";

console.log(str[2]);


console.log(str.length)

// Returns an array of all the words in the string
console.log(str.split(' '))

// returns an array of all the characters in the string
console.log(str.split(''))

console.log(str.toUpperCase())



console.log(str.charAt(12))


const newStr=str.replace('komal raza','Nikki')

// search for a string which includes string
console.log(newStr.toLowerCase().includes('nikki'))
console.log(str)

// return the portion of string from start to end index
console.log(str.substr(1,13))

console.log(str.includes(''));


let searchValue = 'a';
// return the index of the first occurrence of the string

console.log(str.indexOf(searchValue));

// return the index of the last occurrence of the string
console.log(str.lastIndexOf(searchValue));



// extract a section of string and return it as a new string

console.log(str.slice(6,13));


// Array Methods

console.log("Array methods")
const arr = ['a','b','c',1,2,5,7,3,3,8,2,'m','d','w','you'];

const newArr = ['komal','raza','is','a','frontend','developer'];
// return certain value from array at a given index
console.log(arr[3])



console.log(arr.push('noor','q',6,4))
// Pop last value from array
console.log(arr.pop())
// remove from start of array
console.log(arr.shift())
// add given value at start of array
console.log(arr.unshift('noor'))

console.log(arr.slice(2,5))

console.log(arr.concat(newArr));
// join array elements into a string
console.log(arr.reverse().join(''));

console.log(arr.toString())


console.log(arr.sort());

console.log(arr.indexOf('noor'));
console.log(arr)



// Looping

console.log("Looping Starts");

for(key in arr){
    // console.log(arr[key]);
}

console.log("For of Loop");

for(const value of arr){
    // console.log(value)
}


/* getname();

console.log(x);
console.log(getname); */



var x=7;
/* function getname(){
    console.log("Komal");
}
 */
/* getname()
getage(x);
getage2()

function getname(){
    console.log("komal");
}
function getage2(){
    var x= 23;
    console.log(x);
}
function getage(age){
    
    var res = age + 2;
    console.log(res);
}
 */



