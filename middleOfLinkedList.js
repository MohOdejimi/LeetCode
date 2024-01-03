/*. 876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100  */

// My Solution 

function middleOfLL(head) {
  let nodeTotal = 0
  
  if(head !== null) {
    let prev = null
    let current = head
    
    while (current !== null) {
      nodeTotal++
      prev = current
      current = current.next
    }
  }
  
  const midIndex = Math.ceil(nodeTotal / 2) 
  
  let nodeIndex = 0 
  let prev = null;
  let current = head 
  
  while(current !== null) {
    nodeIndex++ 
    prev = current 
    current = current.next 
    
    if(nodeIndex === midIndex) {
      if(nodeTotal % 2 === 0) {
        return current
      } else {
        return prev
      }
    }
  }
}