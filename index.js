//OOP class

// document.querySelector("#buttonCheck1").onclick = function(){
//     let munberX= document.querySelector(".munberX").value
//     let munberY= document.querySelector(".munberY").value
//     let result = (munberX*munberY)
    
    
// }
function rectangle_calculate() {
    let X = document.querySelector("#numberX").value
    let Y = document.querySelector("#numberY").value
    let result =  (X * Y) ;
    document.getElementById("ketquaHCN").innerHTML = result;
}

function square_caculate() {
    let Z = document.querySelector("#square-length").value
    let result = (Z*Z) ;
    document.getElementById("ketquaHV").innerHTML = result;
}