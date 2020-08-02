const items = [
    {
        id:0,
        nome:'Camisetas',
        img:'image.jpg',
        quantidade: 0 
    },
    {
        id:1,
        nome: 'Short',
        img:'image.jpg',
        quantidade: 0
    },
    {
        id:2,
        nome: 'sapato',
        img:'image.jpg',
        quantidade: 0
    }
   
]
let inicializarLoja = ()=>{
    let containerProdutos = document.getElementById('produtos');
    //printar todos os produtos atraves do map()
    //função map() percorre o array e retorna cada elemento no parametro, 
    // para cada chamada o elemento retornado é um novo array
    items.map((val)=>{
        console.log(val.nome)
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <img src="`+val.img`+" />
        </div>
        `
    })
}
inicializarLoja();