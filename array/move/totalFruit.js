/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    // 滑动窗口开始的位置
    let start = 0;
    // 水果数量
    let fruitNum = 0;
    let nowFruitNum = 0;
    const hasFruit = new Map();
    for (let end = 0; end < fruits.length; end++) {
        hasFruit.set(fruits[end], (hasFruit.get(fruits[end]) || 0) + 1);
        nowFruitNum++;
        // 篮子装满，当前种类不符合篮子
        while(hasFruit.size > 2) {
            hasFruit.set(fruits[start], hasFruit.get(fruits[start]) - 1);
            // 当前水果种类篮子空了
            if (hasFruit.get(fruits[start]) === 0) {
                hasFruit.delete(fruits[start]);
            }
            nowFruitNum--;
            start++;
        }
        fruitNum = fruitNum > nowFruitNum ? fruitNum : nowFruitNum;
    }
    return fruitNum ;
}

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));