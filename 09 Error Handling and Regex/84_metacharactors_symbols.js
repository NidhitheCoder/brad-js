let re;
// literal characters
re = /hello/; // print does not match
re = /hello/i; // print matches

// Meta characters
re = /^h/i;  // must start with 
re = /d$/   // must end with
re = /world$/ // matches and space  and world is also matching
re = /World$/ // not match
re = /^Hello$/ // must start with hello and also end with hello
re = /^h.llo$/i // matches any ONE character - matches hello,h3llo,h@llo
re = /^h*llo$/i  //matches any character 0 or more times
re = /gre?a?y/i // optional characters
re = /gre?a?y\?/i // Escape characters

// string to match 
// const str = 'Hello world';
const str = 'gre8?'; // not satisy /^h/i becouse of not start with h;  satisfy with/^h*llo$/i

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} Does Not match ${re.source}`);
  }
}

reTest(re,str);
