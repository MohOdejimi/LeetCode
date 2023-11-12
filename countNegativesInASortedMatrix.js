/*  
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
 */

// My Solution

function countNegatives(grid) {
  let count = 0
  let n = grid.length

  for (let i = 0; i < n; i++) {
    let row = grid[i]
    for (let j = 0; j < row.length; j++) {
      if (row[j] < 0) count++
    }
  }
  return count
}