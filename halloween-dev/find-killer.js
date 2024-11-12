/*
Una persona ha sido asesinada en la noche de Halloween 🔪. Usando un hechizo 🧙‍♀️, hemos conseguido escuchar su último susurro pero es muy debíl y no nos permite identificar quién pudo ser el asesino.

La información que nos proporciona:

whisper: cadena de texto que representa lo que la víctima intentó decir antes de morir

suspects: lista de cadenas que representa los nombres de todos los sospechosos.

Hay que tener que el susurro whisper tiene algunas reglas:

    Cada ~ representa una letra incierta en el susurro.
    Cada posición del susurro es una posición del nombre del asesino.
    La longitud del whisper no siempre representa la longitud completa del nombre, ya que la víctima pudo haber muerto antes de terminar de decirlo.
    Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.

¡Tu objetivo es descubrir quién pudo ser el asesino! Debes devolver:

    Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
    Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
    Si ningún nombre encaja, retorna una cadena vacía ("").

Las mayúsculas y minúsculas de las letras no importan.
*/

function findTheKiller(whisper, suspects) {
    let result = [];

    // Calcula la longitud relevante del whisper, ignorando el '$' si está presente
    let whisperLength = whisper.endsWith('$') ? whisper.length - 1 : whisper.length;

    for (let i = 0; i < suspects.length; i++) {
        let suspect = suspects[i];
        let match = true;

        // Verifica cada carácter en el whisper
        for (let j = 0; j < whisperLength; j++) {
            if (whisper.charAt(j) === '~') {
                // '~' permite cualquier letra, continúa
                continue;
            } 
            if (j >= suspect.length || whisper.toLowerCase().charAt(j) !== suspect.toLowerCase().charAt(j)) {
                // Si se sale del rango del sospechoso o los caracteres no coinciden, no es un match
                match = false;
                break;
            }
        }

        // Si `whisper` termina en `$`, verifica que el nombre del sospechoso tenga exactamente `whisperLength`
        if (match && whisper.endsWith('$') && suspect.length !== whisperLength) {
            match = false;
        }

        // Agrega el sospechoso a los resultados si coincide
        if (match) {
            result.push(suspect);
        }
    }

    // Devuelve el resultado según el número de coincidencias
    if (result.length === 1) {
        return result[0];
    } else if (result.length > 1) {
        return result.join(',');
    } else {
        return '';
    }
}




const whisper = 'D~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']; 

console.log("1: ")
console.log(findTheKiller(whisper, suspects)) // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

console.log("2: ")
console.log(findTheKiller(whisper2, suspects2)) // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

console.log("3: ")
console.log(findTheKiller(whisper3, suspects3)) // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

console.log("4: ")
console.log(findTheKiller(whisper4, suspects4)) // -> ''


