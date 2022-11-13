/* 
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

const dni = prompt('Introduce tu DNI (no mas de 8 digitos)')

if(dni.length==8 && parseInt(dni)>0){
    let letra = dni%23
    window.alert(`Tu DNI completo es ${dni}${letras[letra]}`);
}

