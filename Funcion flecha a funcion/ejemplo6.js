function calcularMCD(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Ambos números deben ser enteros.";
    }
    
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(calcularMCD(24, 18));
console.log(calcularMCD(10, 5));
console.log(calcularMCD(7, 3));
console.log(calcularMCD(3.5, 2));