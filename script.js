fetch("https://restcountries.com/v2/all")
.then((data) => {
   return data.json();
}).then((completedata)=>{
   let data1="";
   completedata.map((values)=>{
       data1+=`<div class="card">
       <h1 class="title">${values.name}</h1>
           <img src=${values.flags} alt="img" class="images">
           <p>${values.capital}</p>
           <p class="category">${values.region}</p>
           <p class="price">${values.subregion}</p>
           <p class="price">${values.population}</p>
   </div>`
   })
   console.log(data1);
   document.getElementById("demo").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})