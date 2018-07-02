//kata 1 add

document.write("add kata 2+6 = ");
function add(a1, a2) {
    let sum = a1 + a2;
    return sum;

}
let sum = add(2, 6)
document.write(sum);


//kata 2 multiply

document.write(" multiply kata 6*8 = ");
function multiply(m1, m2) {
    let total = 0;
    for (let i = 0; i < m2; i++) {
        total = add(total, m1);
    }
    return total;
}
let total = multiply(6, 8);
document.write(total);

//kata 3 power

document.write(" power kata 2*8 = ");
function power(p1, p2) {
    let pow = 1;
    for (let i = 0; i < p2; i++) {
        pow = multiply(pow, p1);
    }
    return pow;
}
let pow = power(2, 8);
document.write(pow);

//Kata 4 Power

document.write(" factorial kata 4= ");
function factorial(f1) {
   let tot = 1;
   let fac = 0;
    let num=1;
    for (let i = 0; i < f1; i++) {
        fac=add(fac,num);
        tot= multiply(tot,fac); 
  }
    return tot;
}
let tot = factorial(4);
document.write(tot);

//Kata 5 Fibonacci

document.write( "fibonacci kata 5= ");
function fibonacci(fibnum){
    
}