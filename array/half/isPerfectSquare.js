/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0; right = num;
    while(left <= right) {
        let mid = left + ((right - left) >> 1);
        const res = mid * mid;
        if (res === num) {
            return true;
        } else if (res < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};

console.log(isPerfectSquare(4));