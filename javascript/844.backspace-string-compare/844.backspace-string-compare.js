/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;

    while(p1 >= 0 || p2 >=0){
        if(s[p1] === '#' || t[p2] === '#'){

            if(s[p1] === '#'){
                let backCount = 2;
                while(backCount > 0){
                    p1--;
                    backCount--;
                    if(s[p1] === '#'){
                        backCount = backCount +2;
                    }
                }
            }

            if(t[p2] === '#'){
                let backCount = 2;
                while(backCount > 0){
                    p2--;
                    backCount--;
                    if(t[p2] === '#'){
                        backCount = backCount +2;
                    }
                }
            }
        }else{
            // s[-1] === undefined !!
            if(s[p1] !== t[p2]){
                return false;
            }else{
                p1--;
                p2--;
            }
        }
    }

    return true;
    
};
// @lc code=end

