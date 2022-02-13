/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const str = [...s];
    const map = new Map();
    str.forEach(key => {
        map.set(key, map.get(key) ? map.get(key) + 1 : 1);
    });
    // AabbaaA 인 경우 str.sort()를 안해주면 aaaAbbA 가 될 수 있음
    return str.sort().sort((o1, o2) => map.get(o2) - map.get(o1)).join('');
};