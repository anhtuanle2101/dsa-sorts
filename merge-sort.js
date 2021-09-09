function merge(arr1, arr2){
    let pter1 = 0;
    let pter2 = 0;
    let arr = [];
    if (arr1.length===0){
        return arr2;
    } 
    if (arr2.length===0){
        return arr1;
    }
    while (pter1 < arr1.length || pter2 < arr2.length){
        if ((arr1[pter1] < arr2[pter2]) || (pter2 === arr2.length && pter1 < arr1.length)){
            arr.push(arr1[pter1]);
            pter1++;
        }else if ((arr1[pter1] > arr2[pter2]) || (pter1 === arr1.length && pter2 < arr2.length)){
            arr.push(arr2[pter2]);
            pter2++;
        }
    }
    return arr;
}