// 1. Write a JavaScript function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function numberCheck (a, b){
   if(a === 50 || b === 50){
      return true
   }
   if (a + b === 50){
      return true
   }
   return false
}
console.log(numberCheck (50, 50));

// 2. Write a JavaScript function to check if a given integer is negative or positive.

function output (a){
   if (a < 0){
      return "negative"
   }
      return "positive"
}
console.log(output (-1));

// 3. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

function nameAddition (a){
   if (a.startsWith ("Py")){
      return a
   }
   let newWord = "Py" + a
   return newWord
}
console.log (nameAddition ("Python"))

// Answer b

function sweetGirl (a, b){
   let newArray = [a, b] 
   let modifyArray = []
   for (let index = 0; index < newArray.length; index++) {
      if (newArray[index].startsWith ("Py")){
         modifyArray.push (newArray[index])
      } else {
         let newWord = "Py" + newArray[index]
         modifyArray.push (newWord)    
      }    
   }
   return (modifyArray)
}
console.log (sweetGirl ("Python", "damilola"));

// 4. Write a JavaScript program to find the largest of three given integers.

const largestInteger = (a,b,c) => {
    const list = [a,b,c];
    let max = Math.max(...list)
    return max
}
console.log(largestInteger (1,2,3))

// 5. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const nearestTo = (a,b) => {
    var diffrenceA = 100 - a
    var diffrenceB = 100 - b
    if(diffrenceA > diffrenceB){
        return b
    }
    return a
}
console.log(nearestTo (-30,500))

// 6. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

const theSame = (a,b,c) => {
    if(a == b && b == c){
        return 30
    }
    if(a == b || b == c || a == c ){
        return 40
    }
    return 20
}
console.log(theSame (10,10,10))

// 7. Write a JavaScript program to reverse a given string.

const reverse = (a) => {
    let stringArr = a.split("")
    let newArr = stringArr.reverse()
    let joinArr =  newArr.join("")
    return joinArr
}
console.log(reverse ("damilola"))

// 8. Write a JavaScript program to count the number of vowels in a given string.

const countVowels = (a) => {
    const vowels = ["a","e","i","o","u"]
    let count = 0
    var arr = a.split("")
    arr.forEach(char => {
        if(vowels.includes(char)){
            count ++
        }        
    });
    return count
}
console.log(countVowels("damilolagadoldamilola"))

// 9. Write a Javascript program that converts a string to an array.

const convertToArr = (a) => {
    var arr = a.split("")
    return arr
}
console.log(convertToArr("damilola"))

// 10. Create a Javascript object with 2 properties and 2 methods.

let obj = {
    Name : "Damilola",
    Age : 7,
    getName : function() {
        return this.Name
    },
    getAge : function(){
        return this.Age
    }
}
console.log(obj.getName())
