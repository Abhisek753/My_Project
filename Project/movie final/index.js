import {navbar} from "./components/navbar.js"
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();



let moviesdata = [
    {
        name:"CHHICHHORE",
        rating:8,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        release_date:2019,
    },
    {
        name:"BAAGHI 3",
        rating:7,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        release_date:2020,
    },
    {
        name:"HOUSEFULL 4",
        rating:8.5,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
        release_date:2019,
    },
    {
        name:"MM DHONI",
        rating:9,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
        release_date:2016,
    },
    {
        name:"MISSION MANGAL",
        rating:8.7,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
        release_date:2019,
    },
    {
        name:"ROCKY",
        rating:8.8,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7391/1367391-v-84d5e12d4c3d",
        release_date:2021,
    },
    {
        name:"TANHAJI",
        rating:8.4,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
        release_date:2020,
    },
    {
        name:"DRISHYAM",
        rating:8.2,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v",
        release_date:2015,
    },
    {
        name:"Thor Love-Thunder",
        rating:8.2,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba",
        release_date:2022,
    },
];




document.getElementById("login").addEventListener("click",myfun);
function myfun(){
    window.location.href="signup.html"
}


let carousel_div=document.getElementById("carousel");

function carousel(){
    //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe
    // https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4633/1364633-h-f78a196931d6
    // https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h
    // https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218
    let images= ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4633/1364633-h-f78a196931d6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218"]


    // all these image vissible ne by one
    //how can i access img1? image[0];
    // how can i access img 2? image[1];
    // how long i append second image? 3second

    let imgElement =document.createElement("img");
    imgElement.style.width="100%"
    imgElement.style.height="400px"


    imgElement.src=images[0];
    carousel_div.append(imgElement);

    // as soon as the web open show image[0]
    // interval 3sec
    // next img ?img [1]
   let i=1;
    setInterval(function(){
        //show me 1 after 3sec
        //show me 2 after 3sec
        if(i===images.length){
            i=0;
        }
      //append images
      imgElement.src=images[i]
      carousel_div.append(imgElement);
      i++;

    },3000)
}
carousel();
let data_div=document.getElementById("movies");
localStorage.setItem("movies",JSON.stringify(moviesdata));
function appendMovies(data){
    let loader_div=document.getElementById("loader_div");
  loader_div.style.display="none"

    data_div.innerHTML=null;
    data.forEach(function(el){
        let div=document.createElement("div");
        div.style.marginTop="30px"
        let p_name=document.createElement("p");
        p_name.innerHTML=el.name;
        p_name.style.color="rgb(202,201,206)"
        let p_rating=document.createElement("p");
        p_rating.style.color="rgb(202,201,206)"
        p_rating.innerHTML=` IMDb Rating ${el.rating}`;
        let img=document.createElement("img");
        img.style.width="70%"
        img.id="poster";
        img.src=el.img;
        let release=document.createElement("p");
        release.style.color="rgb(202,201,206)"
        release.innerHTML=`Release Date ${el.release_date}`;
        
        div.append(img,p_name,p_rating,release);
        data_div.append(div);
    });
}
// appendMovies(moviesdata);
document.getElementById("sort-lh").addEventListener("click",sortLH);
document.getElementById("sort-hl").addEventListener("click",sortHL);


function sortLH(){
    moviesdata.sort(function(a,b){
        return a.rating-b.rating;
        })
    appendMovies(moviesdata);
    
    }
function sortHL(){
    moviesdata.sort((a,b)=> b.rating-a.rating);
    appendMovies(moviesdata);
}

let getmedata=new Promise(function(resolve,reject){
    //there are three steps of promise
    //pending
    //resolved
    //rejected
    
  
    //our promise takes time
    //in our case proise is we will give you movies data after 3 sec
  
    setTimeout(function(){
      let data = moviesdata;
    if(data!=null){
      resolve(data) //return data
    }
    else{
      reject("ERR:Server could not get movies data");
    }
  
      // console.log("data",data);
  },2000);
  
  })
  // console.log("getmedata",getmedata);
  //getdata is obj created by promise cf;
  
  // .then eat what?
  
  //then -->resolve
  //catch -->error
  
  
  
  getmedata.then(function(success){
      
      
     //dependency accordingly one by one
      //.then182
      appendMovies(success);
  })
  .catch(function(error){  //getdata.catch can be done
  console.log("error",error)
  })


  console.log("index page")

  //key 8a3503e0
  




  