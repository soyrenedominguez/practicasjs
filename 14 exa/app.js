let peso=document.querySelector("#peso")
let altura=document.querySelector("#altura")
let vp=document.querySelector("#vp")
let va=document.querySelector("#va")
let res=document.querySelector("#res")
peso.oninput=()=>{calcular()}
altura.oninput=()=>{calcular()}
const calcular=()=>{
    vp.innerHTML=`${peso.value} KG`
    va.innerHTML=`${altura.value} M`
    res.innerHTML=`<img src="load1.gif" class="w-25">`
    setTimeout(()=>{
        let p=parseInt(peso.value);
        let a=parseFloat(altura.value);
        let imc=p/(a*a);
        let con="";
        if(imc<18.5){ con="BAJO PESO"  }
        else if(imc>=18.5&&imc<25){ con="NORMAL"  }
        else if(imc>=25&&imc<30){ con="SOBRE PESO"  }
        else if(imc>=30&&imc<35){ con="OBESIDAD I"  }
        else if(imc>=35&&imc<40){ con="OBESIDAD II"  }
        else{con="OBESIDAD III"  }
        res.innerHTML=`<div class="text-center m-auto">
        <h1 class="text-danger">IMC</h1>
        <div class="card text-primary w-50 m-auto"><h2>${imc.toFixed(2)}</h2></div>
        <h1 class="text-danger">CONDICION</h1>
        <div class="card text-primary w-50 m-auto"><h2>${con}</h2></div>
        </div> `
    },1200);
}