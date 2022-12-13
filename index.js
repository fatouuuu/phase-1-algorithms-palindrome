function isPalindrome(word) {
  // Write your algorithm here
  let reveredStr = word.split('').reverse().join('');
  return reveredStr === word 
}

/* 
  Add your pseudocode here
  --> create function isPalindrome that takes a string as an argument 
  returns true if string is a palindrome and false if it isn't 
  --> split string into an array of letters  
  --> reverse and then join the split array 

*/

/*
  Add written explanation of your solution here
  I used several in-built array methods to check if the provided 
  string is a palindrome. 
  --> The split() method splits the string into an array of 
  substrings by separating the string into substrings. 
  --> The reverse() method reverses the separated elements 
  --> The join() method joins all the elements into a string
  --> and finally, the return value checks if the reversed string is 
  strictly equal to the original string 
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
