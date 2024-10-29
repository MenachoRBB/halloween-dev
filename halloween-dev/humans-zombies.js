function battleHorde(zombies, humans) {
    const arrayZombies = zombies.split('').map(Number);
    const arrayHumanos = humans.split('').map(Number);

    let resultado1 = 0;
    let resultado2 = ''

    for(i = 0; i < arrayHumanos.length; i++){
        if(arrayHumanos[i] > arrayZombies[i]){
            resultado1 = arrayHumanos[i] - arrayZombies[i]
            if(i +1 < arrayHumanos.length){
                arrayHumanos[i+1] = arrayHumanos[i+1] + resultado1
            }
            resultado2 = (resultado1+"h")
        }else if (arrayZombies[i] > arrayHumanos[i]){
            resultado1 = arrayZombies[i] - arrayHumanos[i]
            if(i + 1 < arrayHumanos.length){
                arrayZombies[i+1] = arrayZombies[i+1] + resultado1
            }
            resultado2 = (resultado1+"z")
        }else{
            if(i == arrayHumanos.length - 1){
                return 'x';
            }
        }
    }
    return resultado2
  }

// Ejemplo de uso
const zombies = '242';
const humans = '334';

const zombies2 = '444';
const humans2 = '282';

console.log(battleHorde(zombies, humans))
