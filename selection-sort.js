function selectionSort(arr){
    for (i=0;i<arr.length;i++){
        let min = i;
        for (j=i+1;j<arr.length;j++){
            if (arr[j]<arr[min]){
                min = j;
            }
        }
        if (i!=min){
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
}