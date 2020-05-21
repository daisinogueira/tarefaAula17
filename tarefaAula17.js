let amigo = {nome: 'Jose', //atributos
Sexo:'M', 
peso: 85.4,
engordar(p=0){ //metodo, função
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2) //adicionando 2 ao peso
console.log(`${amigo.nome} pesa ${amigo.peso}`)//resultado