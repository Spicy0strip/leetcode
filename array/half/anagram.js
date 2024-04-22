/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    for(let i = 0; i < s.length; i++) {
        let isExist = false;
        for(let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                isExist = true;
                t = t.slice(j, j+1);
                console.log(s[i], t, isExist);
                break;
            }
        }
        if (!isExist) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'));