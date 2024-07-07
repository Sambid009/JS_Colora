let currentItem = 0;
let colors = ["lime","blue","yellow","green","orange","grey","black"]


let sam = colors[currentItem];
document.body.style.backgroundColor = sam;



let abc = document.getElementById("btn")
let def = document.querySelector(".color")
def.textContent = sam

abc.addEventListener("click",function(){
currentItem ++
if (currentItem > colors.length-1){
  currentItem = 0;
}
document.body.style.backgroundColor = colors[currentItem]
def.textContent = colors[currentItem]

})
