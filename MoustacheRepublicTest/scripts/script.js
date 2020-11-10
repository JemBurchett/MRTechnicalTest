
let carts = document.querySelectorAll('.add')

let product = [
    {
        name: 'Classic Tee',
        tag:'ClassicTee',
        price: 75.00,
        inCart:0
    }
]

for(let i=0; i<carts.length; i++){
carts[0].addEventListener('click',()=> {
    num(product);
    ttlCost(product)
})
}

function cartNumLoad(){
    let productNum = localStorage.getItem('num');

    if(productNum){
        document.querySelector('.cart span').textContent=productNum;
    }
}

function num(){

    let productNum = localStorage.getItem('num');

    productNum= parseInt(productNum);

    if(productNum){
        localStorage.setItem('num',productNum+1);
        document.querySelector('.cart span').textContent=productNum+1;
    } else{
        localStorage.setItem('num',1);
        document.querySelector('.cart span').textContent=1;
    }

    setItems(product);

}

function setItems(product){

 let cartItems = localStorage.getItem("productsInCart");

 cartItems = JSON.parse(cartItems);
 


if(cartItems !=null){

        if(cartItems[products.tag] ==undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
    
    
    cartItems[products.tag].inCart += 1;
 }
 else {
    product.inCart = 1;
    cartItems ={
        [product.tag]:product
    }
 }

  localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}

function totalCost(product){

    let cartCost= localStorage.getItem('totalCost');

    cartCost = parseInt(cartCost); 

    if(cartCost != null){
        localStorage.setItem("totalCost",cartCost+product.price);
    }

    localStorage.setItem("totalCost",product.price);

}

cartNumLoad();