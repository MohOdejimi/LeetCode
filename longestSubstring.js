/* 3. Longest Substring Without Repeating Characters
Description
Hints
Submissions
Discuss
Solution
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.*/

// My Solution 

function lengthOfLongestSubstring(s) {
  let sLen = s.length
  let maxSubLen = 0
  let charMap = new Map()
  let start = 0

  for (let i = 0; i < sLen; i++) {
    let char = s[i]

    if (!charMap.has(char) || charMap.get(char) < start) {
      charMap.set(char, i + 1)
      maxSubLen = Math.max(maxSubLen, i - start + 1)
    } else {
      start = charMap.get(char)
      charMap.set(char, i + 1)
    }
  }
  return maxSubLen
}