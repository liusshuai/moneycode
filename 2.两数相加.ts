/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const res: ListNode = new ListNode();
    let curTotalNode = res;
    let l1Node = l1;
    let l2Node = l2;
    let needAddOne = false;
    while(l1Node || l2Node) {
        const l1Value = l1Node ? l1Node.val : 0;
        const l2Value = l2Node ? l2Node.val : 0;
        const total = l1Value + l2Value + (needAddOne ? 1 : 0);
        curTotalNode.val = total % 10;
        needAddOne = total > 9;
        l1Node = l1Node ? l1Node.next : null;
        l2Node = l2Node ? l2Node.next : null;
        if (l1Node || l2Node || needAddOne) {
            curTotalNode = curTotalNode.next = new ListNode(needAddOne ? 1 : 0);
        }
    }

    return res;
};
// @lc code=end

