/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(preferences = []) {
// your implementation
    var a, b, c;
    var counter = 0;
    for (var i = 0; i < preferences.length; i++){
        a = preferences[i];
        b = preferences[a-1];
        c = preferences[b-1];
        if (c == i+1) {
            counter++;}
    }
    return Math.floor(counter/3);
};
