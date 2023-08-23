 /* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters */

 // My Solution 

 function groupAnagram(strs) {
   let anagramsMap = new Map()
   let n = strs.length

   for (let i = 0; i < n; i++) {
     let currentStr = strs[i]
     let arrayStr = currentStr.split('').sort().join('')
     if (anagramsMap.has(arrayStr)) {
       anagrams.get(arrayStr).push(currentStr)
     } else {
       anagramsMap.set(arrayStr, [currentStr])
     }
   }
   return Array.from(anagramsMap.values())
 }