/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109 */

// My Solution 

func searchRange(nums []int, target int) []int {
	n := len(nums)
	first := -1
	last := -1
	left := 0
	right := n - 1

	for left <= right {
		mid := (left + right) / 2
		if nums[mid] == target {
			first = mid
			right = mid - 1
		} else if nums[mid] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	if first != -1 {
		left = first
		right = n - 1

		for left <= right {
			mid := (left + right) / 2
			if nums[mid] == target {
				last = mid
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}

	return []int{first, last}
}