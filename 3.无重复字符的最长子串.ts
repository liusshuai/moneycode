/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let subString1: string = '';
    let subString2: string = '';
    let index: number = -1;

    for (let i = 0; i < s.length; i++) {
        index = subString2.indexOf(s[i])
        if (index > -1) {
            subString2 = subString2.substring(index + 1) + s[i];
        } else {
            subString2 += s[i];
        }

        if (subString2.length > subString1.length) {
            subString1 = subString2;
        }
    }

    return subString1.length;
};
// @lc code=end

