/**
 * Problem Statement:
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum = new ListNode();
  let carry: number;

  while (l1.next !== null && l2.next !== null) {
    let nextSumNode = new ListNode();
    carry = Math.floor((l1.val + l2.val) / 10);
    sum.val = (l1.val + l2.val) % 10;
    sum.next = new ListNode();
  }

  return sum;
}

console.log(
  addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3, null))),
    new ListNode(5, new ListNode(6, new ListNode(4, null)))
  )
);
