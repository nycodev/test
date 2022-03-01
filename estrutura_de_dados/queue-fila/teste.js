import { Queue } from "./queue-fila.js";

const fila = new Queue;

//As "pessoas" vão entrando na fila 
fila.enqueue('Paola')
fila.enqueue('Nycolas')
fila.enqueue('Noah')
fila.enqueue('Theo')

console.log(fila) //como a fila está atualmente 

fila.dequeue() //a primeira pessoa da fila é "atendida"

console.log('Uma pessoa foi atendida')

console.log(fila) //a fila "perdeu" seu primeiro elemento que já foi "atendido" (first in first out)

