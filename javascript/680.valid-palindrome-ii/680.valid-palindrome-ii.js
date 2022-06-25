/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g,'')
    .toLowerCase();

    let left = 0;
    let right = s.length - 1;

    const validSubPalindrome = (l, r, x) => {
        while(l < r ){
            if(x[l] !== x[r]){
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    while(left < right){
        if(s[left] !== s[right]){
            return validSubPalindrome(left, right-1, s) || validSubPalindrome(left+1, right, s);
        }
        left++;
        right--;
    }

    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = validPalindrome;
// @after-stub-for-debug-end


