
var elList = document.querySelector(".js-list");
var elSelect=document.querySelector(".js-select")
var elSelect2=document.querySelector(".js-select2")
var elOption=document.querySelector(".js-option")
let elForm=document.querySelector(".js-form");
let elInput=document.querySelector(".js-input");
let ElDarkmode=document.querySelector(".js-dark")



function wiew(Array,node) {
  node.innerHTML='';
  for(pokemonn of Array){
    var newItem=document.createElement('li');
    newItem.setAttribute("class","mb-5 col-sm-12 col-md-6 col-lg-4 title text-center border border-danger");
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
    newText.setAttribute("class","title ");
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
  let newArr=[];
  elForm.addEventListener('input', (evt) =>{
    evt.preventDefault();
    newArr=[];
    elList.innerHTML='';
    let elInputVal=elInput.value.toLocaleLowerCase();
    pokemons.forEach((el)=>{
      if(el.name.toLocaleLowerCase().includes(elInputVal)){
        newArr.push(el);
        wiew(newArr,elList)
      }
    });
    console.log(newArr);
  });


  //SORT

  var newsorte = []

  elSelect2.addEventListener('change',function(){
    newsorte = []
    elList.innerHTML = ''
  
  pokemons.forEach((els)=>{
    newsorte.push(els)
    newsorte.sort((a,b)=> 
    a.name.toLocaleLowerCase().charCodeAt(0) - 
    b.name.toLocaleLowerCase().charCodeAt(0))
  
  })
  
  if(elSelect2.value == 'a-z'){
  
    newsorte.sort((a,b)=> 
    a.name.toLocaleLowerCase().charCodeAt(0) - 
    b.name.toLocaleLowerCase().charCodeAt(0))
    wiew(newsorte,elList)
  }
  
  if(elSelect2.value == 'z-a'){
    
    newsorte.sort((a,b)=>
    b.name.toLocaleLowerCase().charCodeAt(0) - 
    a.name.toLocaleLowerCase().charCodeAt(0))
    wiew(newsorte,elList)
  }
  })



  // darkmode
let theme=false
ElDarkmode.addEventListener("click",function (){
    theme=!theme
    const bg=theme ? "dark" :"light";
    window.localStorage.setItem("theme",bg)
    changeTheme()
});
function changeTheme() {
    if(window.localStorage.getItem("theme")=="dark"){
        document.body.classList.add("dark");
    }
  
    else{
        document.body.classList.remove("dark");
    }
    changeTheme()
}
