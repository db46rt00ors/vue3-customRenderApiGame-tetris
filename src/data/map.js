export const map  = (() => {
    var arr = [];
    for(var i = 0; i < 32; i++){
        arr.push([]);
        for (var j = 0; j < 13; j++) {
            arr[i].push(0);
        }
    }
    arr.push(Array(13).fill(1));
    return arr
})();
