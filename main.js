let calc = document.getElementById("calc");
calc.addEventListener("click", calculaIMC);

let reset =document.getElementById("reset")
reset.addEventListener("click",reinicio)

function calculaIMC() {
    let w = document.getElementById("peso").value;
    let h = document.getElementById("altura").value;
    if (w==0) alert("Ingrese el peso");
    let IMC;
    if (h>=35 && h<=300) {
        IMC = w/(h/100)**2
    } else {
        if (h>=0.35 && h<=3) {
            IMC = w/h**2
        } else {
            alert("ingrese una altura correcta")
        }
    }
    document.getElementById("imc").innerHTML = `<h2>${IMC.toFixed(2)}</h2>`
    if (IMC<18.5) {
        document.getElementById("imc").style.backgroundColor ="dodgerblue"
    } else {
        if (IMC>=18.5 && IMC<25) {
            document.getElementById("imc").style.backgroundColor ="lime"
        } else {
            if (IMC>=25 && IMC<30) {
                document.getElementById("imc").style.backgroundColor ="yellow"
            } else {
                if (IMC>=30 && IMC<35) {
                    document.getElementById("imc").style.backgroundColor ="rgb(255, 170, 0)"
                } else{
                    document.getElementById("imc").style.backgroundColor ="red"
                }
            }
        }
        
    }
}

function reinicio(){
    document.getElementById("peso").value = null;
    document.getElementById("altura").value = null;
    document.getElementById("imc").innerHTML = ``;
    document.getElementById("imc").style.backgroundColor = "#fff";

}