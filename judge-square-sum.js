/*  Given a non - negative integer c, decide whether there 're two integers a and b such that a2 + b2 = c.

Example 1:
Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:
 Input: c = 3
Output: false


Constraints:
  0 <= c <= 231 - 1 */


// My Solution

function judgeSquareSum(num) {
  const setInterface = new Set()
  for (let i = 0; i * i <= num; i++) {
    let currentSquare = i * i
    setInterface.add(currentSquare)
    if (setInterface.has(num - currentSquare)) return true
  }
  return false
}