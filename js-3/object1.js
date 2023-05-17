let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    estatura: 1.8,

    saluda: function () {
        console.log("Hola me llamo " + this.nombre)
    }
}
let llave = "estatura"
console.log(pedro[llave]);

delete pedro.activo
console.log(pedro.edad);
pedro.saluda();


