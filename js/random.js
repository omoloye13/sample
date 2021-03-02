let myDiv=document.getElementById("bod")
let Button=document.getElementById("box")
Button.addEventListener("click", pro);
function pro() {
     let color=["red", "blue", "green", "orange","pink", "grey","black","yellow"];
     let num=Math.floor(Math.random()*color.length);
     let myColor=color[num];
     myDiv.style.backgroundColor=myColor;
     console.log(myColor);
     console.log(num);
  

}