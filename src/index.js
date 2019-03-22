// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let H=0,Q=0,D=0,N=0,P=0;
    if(currency <= 0){
        return {};
    }
    else if(currency > 10000){
        let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return error;
    }
    else{
        while (currency > 0){
            while (currency >= 50){
                currency = currency - 50;
                H = H + 1;
            }
            while (currency >= 25) {
                currency = currency - 25;
                Q = Q + 1;
            }
            while (currency >= 10) {
                currency = currency - 10;
                D = D + 1;
            }
            while (currency >= 5) {
                currency = currency - 5;
                N = N + 1;
            }
            while (currency >= 1) {
                currency = currency - 1;
                P = P + 1;
            }
        }
    }
    console.log(`${H}`);
    let res = new Object();
    if (H > 0) {res.H = H};
    if (Q > 0) {res.Q = Q};
    if (D > 0) {res.D = D};
    if (N > 0) {res.N = N};
    if (P > 0) {res.P = P};
    return res;

}
