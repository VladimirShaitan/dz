let a = [1,4,8,11, 21,23,24,64,70,84,125,704, 1099, 1200, 1201, 1202, 2000];

function count(arr, min, max) {
    let l = 0;
    let r = arr.length-1;


    while (min > arr[l] || max < arr[r]) {

        if(min > arr[l]) {
            l += 1
        }

        if(max < arr[r]) {
            r -= 1;
        }

        if(arr[l] > arr[r]) {
            return 0;
        }

    }

    return arr.slice(l, r+1).length
}

console.log(count(a, 1, 10)); // 3   (подходят элементы 1, 4, 8)
console.log(count(a, 200, 700)); // 0   (в этом промежутке нет искомых чисел)
console.log(count(a, 20, 100)); // 6   (подходят элементы 21,23,24,64,70,84)
console.log(count(a, 1000, 2000)); // 5   (подходят элементы 1099, 1200, 1201, 1202, 2000)
console.log(count(a, 84, 84)); // 1   (подходит элемент 84)