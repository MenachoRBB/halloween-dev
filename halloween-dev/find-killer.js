//SIN ACABAR
function findTheKiller(whisper, suspects) {
    let result = []

    for(i in suspects){
       for(j = 0; j < suspects[i].length; j++){
             if((suspects[i].charAt(j) == whisper.charAt(j)) && result.includes(suspects[i]) == false){
                result.push(suspects[i])
            }
       }
       return result
    }
  return ''
}

/*const whisper = 'D~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];
console.log(findTheKiller(whisper, suspects))*/




const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller(whisper2, suspects2)) // -> 'Freddy,Freddier,Fredderic'
/*
const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''
*/

