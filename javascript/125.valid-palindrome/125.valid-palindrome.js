/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCaseString =  s
    .replace(/[^A-Za-z0-9]/g,'')
    .toLowerCase();

    for(let i = 0; i < lowerCaseString.length / 2; i++){
        if(lowerCaseString[i] !== lowerCaseString[lowerCaseString.length - i - 1]){
            return false;
        }
    }

    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end