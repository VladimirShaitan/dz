arr = [1,4,8,11, 21,23,24,64,70,84,125,704, 1099, 1200, 1201, 1202, 2000];

function count(array, min, max) {
    let numsCount = 0;

    for(let i = 0; i <= array.length-1; i++) {
        if(array[i] >= min && array[i] <= max) {
            numsCount += 1;
            if(max === min) break;
        } else if(array[i] > max ) {
            break;
        }
    }

    return numsCount;
}


console.log(count(arr, 1, 10)); // 3   (подходят элементы 1, 4, 8)
console.log(count(arr, 200, 700)); // 0   (в этом промежутке нет искомых чисел)
console.log(count(arr, 20, 100)); // 6   (подходят элементы 21,23,24,64,70,84)
console.log(count(arr, 1000, 2000)); // 5   (подходят элементы 1099, 1200, 1201, 1202, 2000)
console.log(count(arr, 84, 84)); // 1   (подходит элемент 84)