let arr = [1,4,8,11, 21,23,24,64,70,84,125,704, 1099, 1200, 1201, 1202, 2000];

function binary_search(array, val) {
    let start = 0;
    let end = array.length-1;

    while (end >= start) {
        let middle = Math.floor((end + start) / 2);

        if(array[middle] === val) {
            return true;
        }

        if(start === end) {
            return false;
        }

        if(array[middle] < val) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }


    }


}

console.log(binary_search(arr, 8)); // YES
console.log(binary_search(arr, 10)); // NO
console.log(binary_search(arr, 70)); // YES
console.log(binary_search(arr, 1098)); // NO
console.log(binary_search(arr, 1202)); // YES
console.log(binary_search(arr, 1999)); // NO
