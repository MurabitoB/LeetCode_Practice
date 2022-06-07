/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const numsMap = {};
    
    for (let p = 0; p < nums.length; p++){
        
        const currentMapValue = numsMap[nums[p]];

        if (currentMapValue >= 0 ) { 
            return [currentMapValue, p];
        }else{
            const numToFind = target - nums[p]; // 7
            numsMap[numToFind] = p;
        }
    }
    return null;
};
// @lc code=end