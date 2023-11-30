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

function getNumberEdits(p) {
  /*
    p has
      testString - the remainder of the string to test
      editCount - the counter of how many edits have been made
      palStack - the palindromic edits made to the string.
                 Chars get pushed over the course of testing the string, and then the stack is used to build the final palindrome.
  */
  if (p.testString.length == 1) {
    i = {
      testString: p.palStack + p.testString + p.palStack.split('').reverse().join(''),
      editCount: p.editCount,
      palStack: ""
    };
    logIntermediateStep(i);
    return i;
  }
  else if (p.testString.length == 2) {
    edit = p.testString[0] != p.testString[1] ? 1 : 0;
    return {
      testString: `${p.palStack}${p.testString[0]}${p.testString[0]}${p.palStack.split('').reverse().join('')}`,
      editCount: p.editCount + edit,
      palStack: ""
    }
  }
  else if (p.testString[0] == p.testString.slice(-1)) {
    i = getNumberEdits({ testString: p.testString.slice(1).slice(0, -1), editCount: p.editCount, palStack: `${p.palStack}${p.testString[0]}` });
    logIntermediateStep(i);

    return i;
  }
  // Remove first character
  a = getNumberEdits({ testString: p.testString.slice(1), editCount: p.editCount + 1, palStack: `${p.palStack}${p.testString[0]}` });
  // Remove last character
  b = getNumberEdits({ testString: p.testString.slice(0, -1), editCount: p.editCount + 1, palStack: `${p.palStack}${p.testString.slice(-1)}` });
  // Remove first and last character
  c = getNumberEdits({ testString: p.testString.slice(1).slice(0, -1), editCount: p.editCount + 1, palStack: `${p.palStack}${p.testString[0]}` });

  if (a.editCount < c.editCount && a.editCount < b.editCount) {
    i = { testString: a.testString, editCount: a.editCount, palStack: a.testString }
  }
  else if (b.editCount < c.editCount) {
    i = { testString: b.testString, editCount: b.editCount, palStack: b.testString }
  }
  else {
    i = { testString: c.testString, editCount: c.editCount, palStack: c.testString }
  }
  logIntermediateStep(i);

  return i;

  function logIntermediateStep(i) {
    console.log(`Intermediate step: ${i.testString}, ${i.editCount}, ${i.palStack}`);
  }
}


function palindromeChecker(input) {

  const startTime = new Date().getTime(); // Start the timer

  // ADD YOUR CODE BELOW HERE

  reversed = input.split('').reverse().join('');
  isPalindrome = reversed == input;
  console.log(`\nInput: ${input}`);
  console.log(`Palindrome: ${isPalindrome}`)
  if (!isPalindrome) {
    startingPoint = { testString: input, editCount: 0, palStack: '' }
    result = getNumberEdits(startingPoint)
    console.log(`Minimum number of edits: ${result.editCount}`)
    console.log(`Edited String: ${result.palStack}`)
  }

  // ADD YOUR CODE ABOVE HERE

  const endTime = new Date().getTime(); // Stop the timer

  console.log(`Execution time: ${endTime - startTime} milliseconds`);

}

palindromeChecker("fnoon");

// palindromeChecker("input string");

// palindromeChecker("tacocat");
// palindromeChecker("infraredfi");

// palindromeChecker("racecarf");
// palindromeChecker("fracecar");

// palindromeChecker("a1234554321");
// palindromeChecker("a12345677654321");
// palindromeChecker("a123456776b54321");
// palindromeChecker("aa123456776bb54321");

// palindromeChecker("baaac");
// palindromeChecker("aaac");
// palindromeChecker("baxcac");
// palindromeChecker("baVxcVac");
// palindromeChecker("baV___xc___Vac");