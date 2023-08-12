/*. Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

Example 1:
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Example 2:
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
 

Constraints:
The number of nodes in the tree is in the range [1, 104].
-104 <= Node.val <= 104
root is guaranteed to be a valid binary search tree.
-105 <= k <= 105. */

// My Solution

function findTarget(root, k) {
  const stack = []
  let current = root
  let result = []

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    result.push(current.val)
    current = current.right
  }
  for (let i = 0; i < result.length; i++) {
    let currentNum = result[i]
    let diff = k - currentNum
    let left = 0
    let right = result.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (result[mid] === diff) return true
      if (result[mid] > diff) right = mid - 1
      if (result[mid] < diff) left = mid + 1
    }
  }
  return false
}