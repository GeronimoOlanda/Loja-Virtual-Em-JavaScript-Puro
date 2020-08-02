const items = [
    {
        id:0,
        nome:'Camisetas',
        img:'../img/camiseta.jpg',
        quantidade: 0 
    },
    {
        id:1,
        nome: 'Short',
        img:'../img/short.jpg',
        quantidade: 0
    },
    {
        id:2,
        nome: 'sapato',
        img:'../img/sapato.jpg',
        quantidade: 0
    }
   
]
let inicializarLoja = ()=>{
    let containerProdutos = document.getElementById('produtos');
    //printar todos os produtos atraves do map()
    //função map() percorre o array e retorna cada elemento no parametro, 
    // para cada chamada o elemento retornado é um novo array
    items.map((val)=>{
        
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <img src="`+val.img+`" />
        
        <p>`+val.nome+`</p>
        <a key="`+val.id+`" href="#">Adicionar ao carrinho<a/>
        </div>

        `
    })
}
inicializarLoja();


let AtualizarCarrinho = () =>{
    
    let containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML="";
    items.map((val)=>{
        containerCarrinho.innerHTML += `
            <p>nome do produto:`+val.nome+` | quantidade Agregada: `+val.quantidade+`</p>
            <hr>

        `
    })
}

var links = document.getElementsByTagName('a');
for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        AtualizarCarrinho();

        return false;
    })
}