const lists=["bb25","seif"];

const inptEl=document.querySelector("#inpt");
const iEl=document.querySelector(".fas");
const messageEl=document.querySelector("#message");

function handleclick(){
  
if(lists.includes(inptEl.value)){
  
  iEl.style.color="green";
  messageEl.textContent="correct user"
  messageEl.style.color="green"
}else if(inptEl.value===""){
  alert("insert usser")
  
}

else{
  
  iEl.style.color="red";
  messageEl.textContent="wrong user"
  messageEl.style.color="red"
}
setInterval(function(){
  messageEl.textContent="search/verify reseller"
  messageEl.style.color="whitesmoke"
},10000)
}