const suma=()=>{
    let n1=parseInt(document.querySelector("#n1").value)
    let n2=parseInt(document.querySelector("#n2").value)
    document.querySelector("#res").innerHTML=`<h1>RESULTADO</h1><h2>Suma: ${n1+n2}</h2>`
}
const resta=()=>{
    let n1=parseInt(document.querySelector("#n1").value)
    let n2=parseInt(document.querySelector("#n2").value)
    document.querySelector("#res").innerHTML=`<h1>RESULTADO</h1><h2>Resta: ${n1-n2}</h2>`
}
const multi=()=>{
    let n1=parseInt(document.querySelector("#n1").value)
    let n2=parseInt(document.querySelector("#n2").value)
    document.querySelector("#res").innerHTML=`<h1>RESULTADO</h1><h2>Multiplicacion: ${n1*n2}</h2>`
}
const divi=()=>{
    let n1=parseInt(document.querySelector("#n1").value)
    let n2=parseInt(document.querySelector("#n2").value)
    document.querySelector("#res").innerHTML=`<h1>RESULTADO</h1><h2>Division: ${n1/n2}</h2>`
}