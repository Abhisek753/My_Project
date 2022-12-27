// The items should be stored in local storage with key :- “items”
// API :- https://mock-server-js.onrender.com/api/groceries

// let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries";


showItem();

 async function showItem(){
 try{
    let res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`);
   //   console.log(res)
    let ad= await res.json()
    console.log(ad);
    ad=ad.data;
   //  console.log(ad);
    let total="Total"+" "+ad.length;
    
    appendItem(ad);
    document.getElementById("item_count").innerText=total;
 }
 catch(err){
    console.log("err",err)
 }
    

}
// showItem()
cart_div=document.getElementById("items");
 
function appendItem(data){
  let cartarr=JSON.parse(localStorage.getItem("items"))||[]
  cart_div.innerHTML=null;
    data.forEach(function(el){

   let div=document.createElement("div");
   div.classList="item"
      let name=document.createElement("p");
      name.innerText=el.name;
      let image=document.createElement("img");
      image.src=el.image;
      image.classList="img"
      let price=document.createElement("p");
      price.innerText=el.price;
      let btn=document.createElement("button");
      btn.innerText="add to cart"
      btn.setAttribute("class","add_to_cart");
      btn.onclick=()=>{
         cartarr.push(el)
         localStorage.setItem("items",JSON.stringify(cartarr))
      };
     
      div.append(image,name,price,btn)
      cart_div.append(div)

})
}



