const accesskey="AXJZM3z9IlG8s0bPc2EdX14J7bpgJ8gR4fQJB9Vu_5M";

const form=document.querySelector("form");
const searchinput=document.getElementById("search_input");
const searchresults=document.querySelector(".search-results");
const showmore=document.querySelector(".show_more");

let inputdata="";
let page=1;
async function searchimages(){
    inputdata=searchinput.value;
    page=1;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    showimages(data);  
}
function showimages(data){
    if(page===1){
        searchresults.innerHTML="";
    }
    const results=data.results;
    results.forEach((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imagewrapper=document.createElement("div");
        imagewrapper.classList.add("search-result");
        imagewrapper.appendChild(image);
        searchresults.appendChild(imagewrapper);
    });

    page++;
    if(page>1){
        showmore.style.display="block";
    }
    showmore.addEventListener("click",()=>{
        searchimages();
        page++;
    });
}
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    searchimages();
}); 
showmore.addEventListener("click",()=>{
    searchimages();r
}
);  
