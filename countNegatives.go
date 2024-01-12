/*.  1351. Count Negative Numbers in a Sorted Matrix
Easy

4835

128

Add to List

Share
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
 
 func countNegatives(grid [][]int) int {
   counts := 0
  
  	for i := 0; i < len(grid); i++ {
  		nums := grid[i]
  		left := 0
  		right := len(nums) - 1
  		firstNeg := len(nums)
  
  		for left <= right {
  			mid := (left + right) / 2
  			if nums[mid] < 0 {
  				firstNeg = mid
  				right = mid - 1
  			} else {
  				left = mid + 1
  			}
  		}
  
  		counts += len(nums) - firstNeg
  	}
  
  	return counts
 }