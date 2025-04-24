
class personagem{
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo}

     atacar() {
        let ataque = ""

        if ( this.tipo === "mago"){
            ataque = "magia"
        } else if(this.tipo === "guerreiro"){
            ataque = "espada"
        } else if(this.tipo === "monge"){
            ataque = "artes marciais"
        } else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }   
}





let heroi = new personagem("Leonardo", 28, "mago")
let heroi1 = new personagem("Rafael", 30, "monge")

heroi.atacar()
heroi1.atacar()
