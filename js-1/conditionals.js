function Calcularcolor(num) {
    var color;

    if (num === 1) {
        color = "es negro";
    }
    else if (num === 2) {
        color = "blanco";
    }
    else if (num === 3) {
        color = "rojo";
    }
    else {
        color = "verde";
        }
    return ("el color es " + color);
}
console.log(Calcularcolor(2));
console.log(Calcularcolor(1));
console.log(Calcularcolor(6));
console.log(Calcularcolor(3));