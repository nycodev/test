//Pilha é um conjunto ordenado de itens que segue o princípio L.I.F.O., que significa Last In First Out


//O javascript não tem estrutura de pilha de forma nativa, porém podemos criar nossa própria estrutura:

 class Stack {

    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element); //.push adiciona um novo item no topo da pilha
    }

    pop() {
        this.elements.pop(); //.pop remove um item do final da "lista", no caso, do topo da pilha
    }
}

export { Stack };
