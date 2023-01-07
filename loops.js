'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let o=[];
  let c=0;
  for(let i=0; i<s.length; i++) {
      if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u') {
          console.log(s[i]);
      }
      else {
          o[c]=s[i];
          c++;
      }
  }
   for(let j=0; j<o.length; j++) {
       console.log(o[j])
   } 
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}