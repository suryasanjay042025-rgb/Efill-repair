
let cart=[];

function addToCart(name,price){
cart.push({name,price});
alert(name+" added");
}

function showCart(){
let total=0;
let html="";
cart.forEach(i=>{
total+=i.price;
html+=i.name+" ₹"+i.price+"<br>";
});
html+="Total ₹"+total;
document.getElementById("cart").innerHTML=html;
}
