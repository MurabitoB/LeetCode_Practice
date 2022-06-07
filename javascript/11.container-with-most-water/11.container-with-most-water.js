/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let p1 = 0;
    let p2 = height.length - 1;

    // area = (rightIndex - leftIndex) * Math.Min(height[leftIndex], height[rightIndex])
    while (p1 < p2) {
        const currentHight = Math.min(height[p1], height[p2]);
        const width = p2 - p1;
        const area = currentHight * width;
        
        maxArea = Math.max(maxArea, area);

        if (height[p1] < height[p2]) {
            p1++;
        } else {
            p2--;
        }

    }

    return maxArea;
};
// @lc code=end

