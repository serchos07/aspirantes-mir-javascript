let array = 0;

function join(array) {
 
    let result = "";
  
    for (let i = 0; i < array.length; i++) {
      if (i !== 0) {
        result += " ";
      }
      result += array[i];
    }
  
    return result;
  }

console.log(join(["Mayra", "Alejandra", "Martinez"]))  // Mayra Alejandra Martinez