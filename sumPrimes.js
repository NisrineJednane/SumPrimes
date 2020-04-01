//FCC challenge: 

function primeSum(num) {
    let sum = 0;
    function checkPrime(x) {
        for (let j = 2; j < x; j++) {
            if(x % j === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= num; i++) {
        if(checkPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
