/* Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 

Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits. */

// My Solution

function frequencySort(string) {
  let stringLength = string.length
  let characterCounts = new Map()

  for (let i = 0; i < stringLength; i++) {
    let currentChar = string[i]
    if (characterCounts.has(currentChar)) {
      let freq = characterCounts.get(currentChar)
      characterCounts.set(currentChar, freq + 1)
    } else {
      characterCounts.set(currentChar, 1)
    }
  }

  let arrayOfCharacterCounts = [...characterCounts.entries()]
  let sortedCharcters = arrayOfCharacterCounts.sort((a, b) => {
    if (a[1] > b[1]) return -1
    if (b[1] > a[1]) return 1
    if (b[1] === a[1]) return 0
  })

  let output = ''
  sortedCharcters.forEach(value => {
    output += value[0].repeat(value[1])
  })
  return output
}