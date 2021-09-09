function bubbleSort(arr){
    for (let i=0; i<arr.length;i++){
        let swap = false;
        for (let j=0;j<arr.length-i;j++){
            if (arr[j]>arr[j+1]){
                const tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                swap = true;
            }
        }
        if (swap === false){
            break;
        }
    }

    return arr;
}