/*  Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You must find a solution with a memory complexity better than O(n2).

Example 1:
Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

Example 2:
Input: matrix = [[-5]], k = 1
Output: -5
 
Constraints:
n == matrix.length == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= 109
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
1 <= k <= n2  */


// My Solution

function kthSmallest(matrix, k) {
  let matrices = matrix.flat().sort((a, b) => {
    if (a > b) return 1
    if (b > a) return -1
    return 0
  })
  let left = 0
  let right = matrices.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (mid === k - 1) return matrices[mid]
    if (mid < k) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}