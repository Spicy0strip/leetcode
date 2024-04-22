/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let left = 1; right = x;
    let ans = -1;
    while(left <= right) {
        const mid = left + ((right - left) >> 1);
        // console.log('mid', mid, left, right);
        const res = mid * mid;
        if (res <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};

console.log(mySqrt(19));