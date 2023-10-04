function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("")
  if(reversed === word){
    return true
  }
  else{
    return false
  }
}
 /*
  Add your pseudocode here

reverse the input string

if the reversed string is the same as the input
  return true
else
  return false*/

 
/*
  Add written explanation of your solution here

  create a function that carry out the test
  declare a variable which will hold the data of the reversed words
  an if statement that returns true if the word Is similar if reversed and returns false if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
