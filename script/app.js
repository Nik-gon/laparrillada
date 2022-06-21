const PP= document.getElementById("PP");
const menu= document.getElementById("menuPP");
const menuBB= document.getElementById("menuBB");
const menuGG= document.getElementById("menuGG");
const checkpp=document.getElementById("checkPP");
const checkbb=document.getElementById("checkBB");
const checkgg=document.getElementById("checkGG");
menu.style.display="none";
menu.style.visibility="hidden";
menuBB.style.display="none";
menuBB.style.visibility="hidden";
menuGG.style.display="none";
menuGG.style.visibility="hidden";
let sumador=0
checkpp.addEventListener("click", ()=>{
 while(checkpp.checked){

    menu.style.display="";
    menu.style.visibility="";

    break;
}
    while(checkpp.checked==false){
        menu.style.display="none";
        menu.style.visibility="hidden";
        break;
    }
})
console.log(sumador)
checkbb.addEventListener("click", ()=>{
    while(checkbb.checked){
       menuBB.style.display="";
       menuBB.style.visibility="";
       break;
   }
       while(checkbb.checked==false){
           menuBB.style.display="none";
           menuBB.style.visibility="hidden";
           break;
       }
   })
   checkgg.addEventListener("click", ()=>{
    while(checkgg.checked){
       menuGG.style.display="";
       menuGG.style.visibility="";
       break;
   }
       while(checkgg.checked==false){
           menuGG.style.display="none";
           menuGG.style.visibility="hidden";
           break;
       }
   })




