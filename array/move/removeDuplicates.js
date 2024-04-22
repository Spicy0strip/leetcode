/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let [slow, fast] = [0, 1];
   
    while(fast < nums.length) {
       if (nums[slow] === nums[fast]) {
            fast++;
       } else {
            nums[++slow] = nums[fast];
       }
    }
    return ++slow;
};

console.log(removeDuplicates([1,1,3 ,4]));