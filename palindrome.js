// Challenge Description: Palindrome Checker
// In this challenge, you are tasked with creating a JavaScript program that checks whether a given string is a palindrome and calculates the minimum number of character edits required to make it a palindrome. Palindromes are words or phrases that read the same forwards and backwards.

// Instructions:
//     You are provided with a starter template that includes a timer. Please write your code in between the comments indicating where your code should be.
//     Your program should determine whether the input string is a palindrome or not.
//     If the string is not a palindrome, calculate the minimum number of character edits (insertions, deletions, or substitutions) required to make it one.
//     Example:
//     The solution should include if the input String is a palindrome and if not, the number of edits:

//     Input: need
//     Palindrome: false
//     Minimum number of edits: 1
//     Edited String: deed

function getNumberEdits(pData) {
  if (pData.testString.length == 1 || (pData.testString.length == 2 && pData.testString[0] == pData.testString[1])) {
    return { testString: pData.testString, editCount: pData.editCount, editedString: pData.testString }
  }
  if (pData.testString.length == 2) {
    return { testString: pData.testString, editCount: pData.editCount + 1, editedString: `${pData.testString[0]}${pData.testString[0]}` }
  }
  deleteStartOption = getNumberEdits({ testString: pData.testString.slice(1), editCount: pData.editCount + 1, editedString: pData.testString.slice(1)});
  deleteEndOption = getNumberEdits({ testString: pData.testString.slice(0, -1), editCount: pData.editCount + 1, editedString: pData.testString.slice(0, -1)});
  editOption = getNumberEdits({ testString: pData.testString.slice(1).slice(0, -1), editCount: pData.editCount + 1, editedString: pData.testString.slice(1).slice(0, -1)});
  
  if (deleteStartOption.editCount < editOption.editCount && deleteStartOption.editCount < deleteEndOption.editCount) {
    return { testString: deleteStartOption.testString, editCount: deleteStartOption.editCount, editedString: deleteStartOption.testString }
  }
  else if (deleteEndOption.editCount < editOption.editCount) {
    return { testString: deleteEndOption.testString, editCount: deleteEndOption.editCount, editedString: deleteEndOption.testString }
  }
  else {
    return { testString: editOption.testString, editCount: editOption.editCount, editedString: editOption.testString }

  }
}


function palindromeChecker(input) {

  const startTime = new Date().getTime(); // Start the timer

  // ADD YOUR CODE BELOW HERE

  reversed = input.split('').reverse().join('');
  isPalindrome = reversed == input;
  console.log(`Input: ${input}\nReversed: ${reversed}`);
  console.log(`Palindrome: ${isPalindrome}`)
  if (!isPalindrome) {
    startingPoint = { testString: input, editCount: 0, editedString: '' }
    result = getNumberEdits(startingPoint)
    console.log(`Minimum number of edits: ${result.editCount}`)
    console.log(`Edited String: ${result.editedString}`)
  }

  // ADD YOUR CODE ABOVE HERE

  const endTime = new Date().getTime(); // Stop the timer

  console.log(`Execution time: ${endTime - startTime} milliseconds`);

}



palindromeChecker("input string");
palindromeChecker("tacocat");
palindromeChecker("infraredfi");
