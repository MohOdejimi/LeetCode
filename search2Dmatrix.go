/*  74. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

Output: true
Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104 */

// My Solution

func searchMatrix(matrix [][]int, target int) bool {
  matrixLen := len(matrix) 
  
  for i := 0; i < matrixLen; i++ {
    grid := matrix[i] 
    
    if grid[len(grid) - 1] >= target {
      left := 0 
      right := len(grid) - 1 
      
      for left <= right {
        mid := (left + right) / 2 
        if grid[mid] == target {
          return true
        } else if grid[mid] > target {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      return false
    }
  }
  return false 
}