function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  split word to array.
  reverse the array
  join the array
*/

/*
  Add written explanation of your solution here
  string needs to be split. call the reverse method to reverse the order of the string
  finally join the reversed array of strings to be a single word . then compare if the string parameteris equal to 
  the reversed string
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

