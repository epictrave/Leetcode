/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Time Conplexity: O(max(M,N))
 * Space Conplexity: O(max(M,N))
 */
const addTwoNumbers = function (l1, l2) {
  const node = new ListNode(0);
  let curr = node;
  let carry = 0;
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    const sum = carry + val1 + val2;
    const value = sum % 10;
    carry = sum >= 10 ? 1 : 0;
    curr.next = new ListNode(value);
    curr = curr.next;
  }
  if (carry) {
    curr.next = new ListNode(1);
  }
  return node.next;
};

/**
 * Time Conplexity: O(max(M,N))
 * Space Conplexity: O(max(M,N))
 */
const recursive = (l1, l2, carry) => {
  if (!l1 && !l2 && carry === 0) return null;
  const val1 = l1 ? l1.val : 0;
  const val2 = l2 ? l2.val : 0;
  const sum = carry + val1 + val2;

  const node = new ListNode(sum % 10);
  l1 = l1 ? l1.next : null;
  l2 = l2 ? l2.next : null;
  node.next = recursive(l1, l2, sum >= 10 ? 1 : 0);

  return node;
};

const addTwoNumbersRecursive = function (l1, l2) {
  return recursive(l1, l2, 0);
};
