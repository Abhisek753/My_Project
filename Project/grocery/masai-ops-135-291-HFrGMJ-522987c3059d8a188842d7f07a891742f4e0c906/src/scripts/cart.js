  let cartarr=JSON.parse(localStorage.getItem("items"))||[]
//   console.log(cartarr)


  container=document.getElementById("cart");

  function appendItem(data){
    container.innerHTML=null;
   
 
     data.forEach(function(el,i){
    let div=document.createElement("div");
    div.classList="item"
       let name=document.createElement("p");
       name.innerText=el.name;
       let image=document.createElement("img");
       image.src=el.image;
       image.classList="img"
       let price=document.createElement("p");
       price.innerText=el.price;
       let total=data.reduce(function(acc,el){
        return acc+ Number(el.price)
       },0)
       document.getElementById("cart_total").innerText="total price"+" "+total;
    
       let btn=document.createElement("button");
       btn.innerText="Remove";
       btn.classList="remove";
       btn.addEventListener("click",remove);
       function remove(){
         Deletecart(cartarr,i)
       }
       
       
      
       div.append(image,name,price,btn)
       container.append(div)
       
 
 })
 }
 appendItem(cartarr)

 function Deletecart(arr,index){
    cartarr=arr.filter(function(ee,i){
        return i!=index;
    })
    localStorage.setItem("items",JSON.stringify(cartarr))
    appendItem(cartarr);
 }
 document.getElementById("checkout").addEventListener("click",checkoutpage);
 function checkoutpage(){
    window.location.href="checkout.html"
 }
 