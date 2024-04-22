/**
 * 比较含退格的字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const realStr = function(str) {
        let slow = 0;
        for (let fast = 0; fast < str.length; fast++) {
            if (str[fast] !== '#') {
                let strArr = str.split('');
                strArr[slow] = strArr[fast];
                str = strArr.join('');
                slow++;
            } else {
                slow = slow == 0 ? slow : slow - 1;
            }
        }
        return str.slice(0, slow);
    }

    const realS = realStr(s);
    const realT = realStr(t);
    // console.log(realS, realT);
    return realS == realT;
}

console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));