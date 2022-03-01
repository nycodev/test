class teste {
    constructor(nome, codigo){
        this.nome = nome,
        this.codigo = codigo
    }
}

const obj = new teste("fulano", 120)
obj.nome = "xabilson"



console.log(`${obj.nome}, ${obj.codigo}`)

