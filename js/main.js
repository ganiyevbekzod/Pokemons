var elBody = document.querySelector("body");
var elList = document.querySelector(".js-list");
var elSelect=document.querySelector(".js-select")
var elOption=document.querySelector(".js-option")

elBody.style.background="linear-gradient(72.67deg, #1A1822 2.78%, #9040E3 173.27%), #6B50FF";
function wiew(Array,node) {
  node.innerHTML='';
  for(pokemonn of Array){
    var newItem=document.createElement('li');
    newItem.setAttribute("class","mb-5 col-sm-12 col-md-6 col-lg-4 title text-light text-center border border-danger");
    node.appendChild(newItem);
  
    var newId=document.createElement('h4');
    newId.textContent=`${pokemonn.id}`;
    newId.setAttribute("class","title");
    newItem.appendChild(newId);
    
    var newImg=document.createElement('img');
    newImg.setAttribute("src", pokemonn.img)
    newItem.appendChild(newImg);
    
    var newText=document.createElement('h4');
    newText.textContent=`${pokemonn.name}`;
    newText.setAttribute("class","title text-light");
    newItem.appendChild(newText);
    
    var newWeight=document.createElement('h4');
    newWeight.textContent=`${pokemonn.weight}`;
    newWeight.setAttribute("class","title");
    newItem.appendChild(newWeight);
    
    var newCandy=document.createElement('h4');
    newCandy.textContent=`${pokemonn.candy}`;
    newCandy.setAttribute("class","title");
    newItem.appendChild(newCandy);
  
    var newHeight=document.createElement('h4');
    newHeight.textContent=`${pokemonn.height}`;
    newHeight.setAttribute("class","title");
    newItem.appendChild(newHeight);
  }
}
wiew(pokemons,elList)
let newArray=[];
elSelect.addEventListener("change",function(){

  newArray=[]

  if(elSelect.value !='All'){
    pokemons.forEach((pok) => {
      if(pok.type.includes(elSelect.value)){
        newArray.push(pok);
      }
      wiew(newArray,elList)
    });
  }else{
  wiew(pokemons,elList)}
})
// let newSet=new Set();

// pokemons.forEach((item) =>{
//   item.type.forEach((type) =>{
//     Array.push(type)
//   })
// })


// newSet.forEach((type) =>{
//   let newOption=document.createElement('option');
//   newOption.value=type;
//   newOption.textContent=type;
//   elSelect.appendChild(newOption);
// });