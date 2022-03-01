//o JS também não tem estrutura de fila de forma nativa, então vamos criar nossa própria:

class Queue {
    constructor() {
        this.elements = []
    }

    enqueue(element) {
        this.elements.push(element); //aqui o .push também insere um novo elemento no final da lista, nesse caso, da "fila"
    }

    dequeue() {
        this.elements.shift(); //dessa vez usamos o shift(), que diferente do pop() remove um item do início da lista, nesse caso, da "fila"
    }
}

export { Queue }
