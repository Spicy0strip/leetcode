/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    // 寻找左边界
    const searchLeftBorder = function(nums, target) {
        let left = 0; right = nums.length - 1;
        let searchLeftBorder = -2;
        while(left <= right) {
            const mid = left + ((right - left) >> 1);
            // console.log('leftMid', mid, left, right);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
                searchLeftBorder = right;
            }
        }
        return searchLeftBorder;
    }

    // 寻找右边界
    const searchRightBorder = function(nums, target) {
        let left = 0; right = nums.length - 1;
        let searchRightBorder  = -2;
        while(left <= right) {
            const mid = left + ((right - left) >> 1);
            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
                searchRightBorder = left;
            }
        }
        return searchRightBorder;
    }
    const left = searchLeftBorder(nums, target); right = searchRightBorder(nums, target);
    // console.log(left, right);
    if (left < -1 || right > nums.length || Math.abs(right - left) === 1) {
        return [-1, -1]
    } else {
        return [left + 1, right - 1,];
    }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));