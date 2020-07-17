let re;

// shorthand charactor classes
re = /\w/; // word charactor - alphanumeric or _
// ^ first charactor will display when console result

re = /\w+/; // + = one or more characters
// ^ full string will dispay when console result
re = /\W/; //non word charactor
re = /\d/; // Match any digit display first element
re = /\d+/; // match any dis=gits 0 or more times
re = /\D/;  //match when non digit charactors
re = /\s/; // match whitespace character"; 
re = /\S/; // match without whitespace character(non-whitespace character)
re = /\Hell\b/i; //word boundary

// Assertions
re = /x(?=y)/; // match if x is only followed by y
re = /x(?!y)/; // match if x is not followed by x

const str = "asdkyxdds"


const result = re.exec(str);
console.log(result);

function reTest(re,str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} Does not Matches ${re.source}`);
    }
}

reTest(re,str);