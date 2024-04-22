/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 左闭右闭
    let left = 0; right = nums.length - 1;
    let mid;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        // console.log('mid', mid, left, right);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return left;
};

console.log(searchInsert([1 , 3, 5, 6, 8], 7));