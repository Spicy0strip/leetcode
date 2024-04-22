/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === target) {
    //         return i;
    //         break;
    //     }
    // }

    // 左闭右闭区间
    let left = 0; right = nums.length - 1;
    let mid;
    while(left <= right) {
        // 二进制右移 >> 1 等于除以2
        // left + (right - left) / 2 = 2left / 2 + right / 2 - left / 2;
        // left + right在某种情况下会超出基本类型所能容纳最大值 >>位运算要比/快一点
        mid = left + ((right - left) >> 1);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));

