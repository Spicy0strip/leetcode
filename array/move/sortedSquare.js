/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0; right = nums.length - 1;
    let res = new Array(nums.length - 1);
    let pow = right;
    while(left <= right) {
        // const leftNumPow = nums[left] * nums[left];
        // const rightNumPow = nums[right] * nums[right];
        // const leftNumPow = Math.pow(nums[left], 2);
        // const rightNumPow = Math.pow(nums[right], 2);
        const leftNumPow = nums[left] ** 2;
        const rightNumPow = nums[right] ** 2;
        if (leftNumPow > rightNumPow) {
            res[pow] = leftNumPow;
            left++;
        } else {
            res[pow] = rightNumPow;
            right--;
        }
        pow--;
    }
    return res;
};

console.log(sortedSquares([-4,-1,0,3,10]));