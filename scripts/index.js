let viewMore =()=>{
  console.log("viewMore button clicked:");
  let viewMoreButtonText=document.getElementById("view-more-btn");
  if(viewMoreButtonText.innerText==="View More"){
     document.getElementById("view-more-city-cards").style.display="flex";
     viewMoreButtonText.innerText="View Less";
  }else{
    document.getElementById("view-more-city-cards").style.display="none";
    viewMoreButtonText.innerText="View More";
  }
};  


let moreCities=[
  {
    cityName:"Agra",
    thumbNail:
    "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg",
  },
  {
    cityName:"Jaipur",
    thumbNail:
    "https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg",
  },
  {
    cityName:"Bangaluru",
    thumbNail:
    "https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg",
  },
  {
    cityName:"Chennai",
    thumbNail:
    "https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg",
  },
];

let defaultcities=[
  {
    cityName:"Delhi",
    thumbNail:
  "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/a2/new-delhi.jpg",
  },
  {
    cityName:"Goa",
    thumbNail:
    "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/f0/goa.jpg",
  },
  {
    cityName:"Hyderabad",
    thumbNail:
    "https://media-cdn.tripadvisor.com/media/photo-s/0f/98/f7/df/charminar.jpg",
  },
  {
    cityName:"Kolkata",
    thumbNail:
    "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/ac/kolkata-calcutta.jpg",
  }, 
];
let appendCitiesToDiv=(cities, divIdString)=>{
  let citiesDivsString=cities
  .map((city) =>{
    return `<div>
      <div class="city-card-and-name-inner">
        <a href="list.html">
          <img src="${city.thumbNail}" class="city-image"/>
          <div class='overlay'><spam>${city.cityName}</spam></div>
        </a>
      </div>
    </div>`;
  })
  .join("");

  document.getElementById(divIdString).innerHTML=citiesDivsString;
};

appendCitiesToDiv(defaultcities, "city-cards");
appendCitiesToDiv(moreCities,"view-more-city-cards");

var searchCities=()=>{
  let enteredCitiString = document.getElementById("search-input");
  enteredCitiString.addEventListener("input",(event)=>{
    let newValue=event.currentTarget.value;
    console.log("You have entered this ...",newValue);
    let xhttp=new XMLHttpRequest();
    let tripadvisorURL="https://tripadvisorl.p.rapidapi.com/";
    let tripadvisorKey="";
    let tripadvisorHost="tripadvisorl.p.rapidapi.com";
    let url=`${tripadvisorURL}location/auto-complete?lang=en_US&units=km&query=${newValue}`;
    xhttp.open("GET",url,true);
    xhttp.setRequestHeader("x-rapidapi-host",tripadvisorHost);
    xhttp.setRequestHeader("x-rapidapi-key",tripadvisorKey);

    xhttp.onreadystatechange=()=>{
      if(xhttp.readyState===4 && xhttp.status===200){
        console.log (xhttp.response);
      }
    };
  });
};
searchCities();