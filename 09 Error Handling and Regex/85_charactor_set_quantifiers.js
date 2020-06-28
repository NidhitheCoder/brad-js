let re;

//  Brackets [] - character sets
re = /gr[ea]y/i;  // must be an a or e;
re = /[GF]rey/;  // Must me as G or F
re = /[^GF]rey/  // matches anything except G and F
re = /[A-Z]rey/  // matches any uppercase letters  and it with i then matches all letters
re = /[a-z]rey/ // matches any lowercase letters and it with i then matches all letters
re = /[A-Za-z]rey/  // matches any letter
re = /[0-9]/  //matches any number within 0-9 . 10 alsom working becouse of considering from [10rey to 0rey]

// braces QUANTIFIESRS
re = /hello/i;
re = /hel{2}o/i // matches with exactly 2 ' l' means must occur exactly {m} amount of times
re = /hel{2,4}o/i  // if  { n,m} matches between n and m times
re = /hel{2,}o/i // must occur atleast 2 times

// Pranthesis () -grouping
re = /([0-9]x){3}/;
re = /^([0-9]x){3}$/;

// string to match
const str = "3x3x3x3x";

// log results 
const result = re.exec(str);
console.log(result);

function reTest(){
if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
} else {
    console.log(`${str} Does not Match ${re.source}`)
}
}

reTest(re,str);