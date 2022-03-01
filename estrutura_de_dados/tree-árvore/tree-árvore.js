
//Árvore é uma coleção não-ordenada de itens, um modelo abstrato de uma estrutura hierárquica, é
//bastante usada quando se quer encontrar um elemento da forma mais fácil possível.
//É constituída por nós com relacionamento pai-filho. 

//Nesse exemplo criaremos uma BST, árvore de busca binária

class Tree {
    constructor() {
        this.nodes = {}
    }

    insert(tree, value) {

        if (tree.value) {
            
            if (value > tree.valor) {
                this.insert(tree.right, value)
            } else {
                this.insert(tree.left, value)
            }
        } else {
            tree.value = value
            tree.right = {}
            tree.left = {}
        }
    }
}

export { Tree }