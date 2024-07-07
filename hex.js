let colors= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let abc = document.getElementById("btn")
let def = document.querySelector(".color")

console.log(def.classList)

abc.addEventListener("click",function(){
    let hex = "#"
    for(let i=0; i<6; i++){
        hex += colors[getrandomNumber()]
    }
    backcolor(hex)
    //document.body.style.backgroundColor = hex
    //def.textContent = hex;    
})

let ass;
function getrandomNumber(){
     ass =  Math.floor(Math.random()*colors.length)
     console.log(ass)
     return ass;
}




function backcolor(a){
    document.body.style.backgroundColor = a
    def .textContent = a;
}