let receta = [
  { nombre: "Sandwich",  ingredientes: [] },
  { nombre: "Pan",  ingredientes: ["Cantidad", 2] },
  { nombre: "Queso",  ingredientes: ["Cantidad",1] },
];

for (let i = 0; i < receta.length; i++) {
  let product = receta[i];
  console.log(product.nombre);
  
  console.log("  ingredientes: " + product.ingredientes);
}
