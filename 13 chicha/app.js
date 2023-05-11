let a=document.querySelector("#a")
let b=document.querySelector("#b")
let c=document.querySelector("#c")

let va=document.querySelector("#va")
let vb=document.querySelector("#vb")
let vc=document.querySelector("#vc")

let res=document.querySelector("#solucion")

a.oninput=()=>{va.innerHTML=a.value;calcular();}
b.oninput=()=>{vb.innerHTML=b.value;calcular();}
c.oninput=()=>{vc.innerHTML=c.value;calcular();}

const calcular=()=>{
  let ax=parseInt(a.value)
  let bx=parseInt(b.value)
  let cx=parseInt(c.value)
  
  aa=(ax>=0)?`+${ax}`:`${ax}`
  bb=(bx>=0)?`+${bx}`:`${bx}`
  cc=(cx>=0)?`+${cx}`:`${cx}`
  
  document.querySelector("#ecuacion").innerHTML=`
    <h1>${aa}x<sup>2</sup>${bb}x${cc}= 0</h1>`
  
  let f=(bx*bx)-(4*ax*cx)
  let x1=0
  let x2=0
  
  if (f == 0) {
    x1 = (-bx) / (2 * ax)
    res.innerHTML = `<h1>x1=${x1.toFixed(2)}</h1>`
  }else if(f>0){
    x1=(-bx+Math.sqrt(f))/(2*ax)
    x2=(-bx-Math.sqrt(f))/(2*ax)
    res.innerHTML=`<h1>x1=${x1.toFixed(2)}</h1><br><h1>x2=${x2.toFixed(2)}</h1>`
  }else  if (f < 0) {
     res.innerHTML = `<h1>NO HAY SOLUCIÓN</h1>`
  }
}