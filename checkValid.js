/** 
 * 
 An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

 

Example 1:


Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.
Example 2:


Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
1 <= matrix[i][j] <= n
 * 
 ****/

// My Solution 

var checkValid = function(matrix) {
    let n = matrix.length 
    for(let i = 0; i < n; i++) {
        let rowSet = new Set()
        let colSet = new Set()
        
        for(let j = 0; j < n; j++) {
            if(rowSet.has(matrix[i][j])) {
                return false
            } else {
                rowSet.add(matrix[i][j])
            }
            
            if(colSet.has(matrix[j][i])) {
                return false
            } else {
                colSet.add(matrix[j][i])
            }
        }
    }
    
    return true
};