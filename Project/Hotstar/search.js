
// import {navbar} from "./components/navbar.js"
// let navbar_div=document.getElementById("navbar");
// navbar_div.innerHTML=navbar();

document.getElementById("login").addEventListener("click",myfun)
function myfun(){
    window.location.href="signup.html"
}
document.getElementById("movie_name").oninput=()=>{
    debouncing(searchMovies,2000)
}


let carousel_div=document.getElementById("carousel");

function carousel(){
  
    let images= ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4633/1364633-h-f78a196931d6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218"]


   

    let imgElement =document.createElement("img");
    imgElement.style.width="100%"
    imgElement.style.height="400px"


    imgElement.src=images[0];
    carousel_div.append(imgElement);

   
   let i=1;
    setInterval(function(){
        //show me 1 after 3sec
        //show me 2 after 3sec
        if(i===images.length){
            i=0;
        }
      
      imgElement.src=images[i]
      carousel_div.append(imgElement);
      i++;

    },3000)
}
carousel();


// function searchMovies(){

  
// let movie_name=document.getElementById("movie_name").value


//    let response= fetch(`http://www.omdbapi.com/?apikey=8a3503e0&s=${movie_name}`);
    //fetch takes us to the server
    // console.log("response",response)
//     response.then(function(success){
//         // console.log("success",success)
//         //collecting the stream
//         let data=success.json();
//         // console.log("data",data)
//         data.then(function(success){
//         console.log("success",success)
//         appendMovies(success.search)
//         }).catch(function(error){
//          console.log("error".error)
//         })
//     })
//     response.catch(function(error){
//        console.log("error".error)
//     })

// }
//another way to to above task
let timerId;
async function searchMovies(){
let loader_div=document.getElementById("loader_div")
loader_div.style.display="block"
  
let movie_name=document.getElementById("movie_name").value

try {
    let response=await fetch(`http://www.omdbapi.com/?apikey=8a3503e0&s=${movie_name}`);

    console.log("response",response)
    let data=await response.json()
    console.log(data);
    actual_data=data.Search;
    
    console.log("actual_data",actual_data);
    appendMovies(actual_data)
}
    
catch(err){
    console.log("err:",err);
}

}
     
function appendMovies(data){
   
let movies_div=document.getElementById("movies")
     movies_div.innerHTML=null;
     loader_div.style.display="none"
    data.forEach(function(el){
   let div =document.createElement("div")
     
   let img =document.createElement("img")
   img.src=el.Poster;
   let p_name=document.createElement("p")
    p_name.innerText=el.Title
    p_name.style.color="rgb(202,201,206)"
    let release=document.createElement("p");
    release.style.color="rgb(202,201,206)"
    release.innerHTML=`Release Date ${el.Year}`;
  div.append(img,p_name,release);
  movies_div.append(div);
    });
}

function debouncing(func,delay){
    if(timerId){
        clearTimeout(timerId)
    }
    timerId=setTimeout(function(){
        func();
        
        //or searchMovies()
        //in bracket also func=search_Movies
    },delay)
    //here delay will take 2000 
}

console.log("search page")