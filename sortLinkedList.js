/* 148. Sort List

Given the head of a linked list,
  return the list after sorting it in ascending order.
  
Example 1:
Input: head = [4, 2, 1, 3]
Output: [1, 2, 3, 4]

Example 2:
Input: head = [-1, 5, 3, 4, 0]
Output: [-1, 0, 3, 4, 5]

Example 3:
Input: head = []
Output: []


Constraints:

  The number of nodes in the list is in the range[0, 5 * 104]. -
  105 <= Node.val <= 105 */


// My Solution 

function sortList(head) {
  if(head === null || head.next === null) {
    return head 
  } 
  
  let sorted = new ListNode(-1)
  let current = sorted
  let nodeVal = [] 

  for(let node = head; node !== null; node = node.next) {
    nodeVal.push(node.val)
  }

  nodeVal = nodeVal.sort((a,b) => a - b) 
  
  for(let i = 0; i < nodeVal.length; i++) {
    current.next = new ListNode(nodeVal[i]) 
    current = current.next
  }
  
  return sorted.next
}