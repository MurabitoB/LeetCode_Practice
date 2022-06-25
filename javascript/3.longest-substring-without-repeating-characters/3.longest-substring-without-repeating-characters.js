/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if(s.length === 0){
        return 0;
    }

    let left = 0;
    let max = 0;
    let seenCharMap = {};

    for(let right = 0; right < s.length; right++){
        const currentChar = s[right];
        const preSeenCharIndex = seenCharMap[currentChar]; // can be undefined

        if(preSeenCharIndex >= left){
            left = preSeenCharIndex + 1;
        }

        seenCharMap[currentChar] = right;

        max = Math.max(max, right - left + 1);
    }

    return max;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end