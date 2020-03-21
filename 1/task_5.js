function sqrt(k) {
    let l = 0;
    let r = k;

    while(l <= r) {

        let m = Math.floor((l+r) / 2);

        if(Math.pow(m, 2) === k) {
            return m;
        }

        if(Math.pow(2, m) < k) {
            l = m + 1
        } else {
            r = m - 1
        }


    }

}


console.log(sqrt( 25)); //5
console.log(sqrt(4)); // 2;
console.log(sqrt(163)); //  12.7671453
