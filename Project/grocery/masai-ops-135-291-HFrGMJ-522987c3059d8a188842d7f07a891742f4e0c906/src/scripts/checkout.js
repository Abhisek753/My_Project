document.getElementById("place-order").addEventListener("click",confirmtext);

function confirmtext(){
   alert= document.getElementById("order-message");
   alert.innerText="Your order is successfully placed";
   localStorage.clear();

   setTimeout(()=>{
   window.location.href="index.html"
   },1000);
}
