

// My Solution 

func searchInsert (nums []int, target int) int {
  n := len(nums)
  left := 0
  right := n - 1 
  index := n 
  
  for left <= right {
    mid := (left + right) / 2 
    
    if nums[mid] >= target {
      index = mid 
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  
  return index
}