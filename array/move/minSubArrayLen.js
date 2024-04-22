/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let resultNum = Number.MAX_VALUE;
    // 滑动窗口起始位置
    let start = 0;
    // 滑动窗口内数值之和
    let sum = 0;
    // 当前滑动窗口长度
    let subLength = 0;
    for(let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while(sum >= target) {
            subLength = end - start + 1;
            resultNum = resultNum < subLength ? resultNum : subLength;
            sum -= nums[start];
            start++;
        }
    }
    return resultNum == Number.MAX_VALUE ? 0 : resultNum;
};

console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8]));