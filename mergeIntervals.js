/*  56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104  */

// My Solution 

var merge = function(arr) {
    const n = arr.length; 


  arr.sort((a, b) => a[0] - b[0]);

  const ans = [];

  for (let i = 0; i < n; i++) { 
    let start = arr[i][0];
    let end = arr[i][1];

    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }

    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }
    ans.push([start, end]);
  }
  return ans;
};