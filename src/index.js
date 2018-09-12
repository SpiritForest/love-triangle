/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(preferences = []) {
    var counter = 0, a, b, c;
    for (var i = 0; i < preferences.length; i++){
        a = preferences[i];
        b = preferences[a-1];
        c = preferences[b-1];
        if (a == preferences[a-1] || b == preferences[b-1] || c == preferences[c-1]) continue;
        if (c == i+1) {
            counter++;}
    }
    return counter / 3;
};
