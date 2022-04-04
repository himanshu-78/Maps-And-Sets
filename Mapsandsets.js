// Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef

// Ans :
let string = "abcadeecfb"
let remove = Array.from(new Set(string)).join(" ");
console.log(remove)                                             // a b c d e f          

// Ans :
// string = "a b c a d e e c f b"

// let word = string.split(" ")

// let remove = word.filter((value, index, src) => {
//     return src.indexOf(value) == index 
// }).join(' ')
// console.log(remove)



// Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

// Ans :
let str = "abcdadeecfb"

let result = new Map();

for(let i = 0; i<str.length; i++)
{
    let char = str.charAt(i)
    if (result.has(char)) 
    {
        let val = result.get(char)
        result.set(char, val+1)
    } 
    else 
    {
        result.set(char, 1)
    }
}
console.log(result)

// Ans :
let strs = "abcdadeecfb"
let output = [...strs].reduce((res, char) => ((res[char] =(res[char] || 0) + 1), res), {});
console.log(output)