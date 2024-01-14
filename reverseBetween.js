/*. 92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and
return the reversed list.

Example 1:
Input: head = [1, 2, 3, 4, 5], left = 2, right = 4
Output: [1, 4, 3, 2, 5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]


Constraints:
  The number of nodes in the list is n.
1 <= n <= 500 -
  500 <= Node.val <= 500
1 <= left <= right <= n */

function reverseList(head, left, right) {
  if (head.next === null) return head 
  
  let temp = head; 
  let prev = null; 
  let count = 0
  
  while(temp !== null) {
    count++ 
    if(count === left && count <= right) {
      let front = temp.next
      temp.next = prev 
      prev = temp
      temp = front
    }
    if(count === right) {
      return head
    }
    prev = temp 
    temp = temp.next
  }
}