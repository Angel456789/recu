let form = document.querySelector("#form");
let numeros = [];

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let a = document.querySelector("#a").value.trim();
    let b = document.querySelector("#b").value.trim();
    let c = document.querySelector("#c").value.trim();
    let error = document.querySelector("#error");

    if(a === "" || b === "" || c === ""){
        error.innerHTML = "Por favor no deje ningun campo vacio";
    }else if(isNaN(a) || isNaN(b) || isNaN(c)){
        error.innerHTML = "Por favor ingrese solo numeros";
    }else{
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        if(a !== Math.trunc(a) || b !== Math.trunc(b) || c !== Math.trunc(c)){
            error.innerHTML= "Por favor solo ingrese numeros enteros";
        }else{
            let mensaje = document.querySelector("#mensaje");
            let tabla = document.querySelector("#tabla");
            numeros.push(a,b,c)
            tabla.innerHTML= listar(a,b,c);
        }
    }
});

a.addEventListener("focus", ()=>{
    error.innerHTML="";
});

b.addEventListener("focus", ()=>{
    error.innerHTML="";
});

c.addEventListener("focus", ()=>{
    error.innerHTML="";
});

let discriminante = (a,b,c) =>{

}

let listar = (a,b,c) =>{
    let msg = "";
    msg += "<table class='table table-dark table-bordered'>";
    msg += "<thead><tr>";
    msg += "<th>a</th>";
    msg += "<th>b</th>";
    msg += "<th>c</th>";
    msg += "<th>x<sub>1</sub></th>";
    msg += "<th>x<sub>2</sub></th>";
    msg += "</tr></thead>";
    msg += "<tbody>";
    msg += "<tr>";
    msg += `<td>${a}</td>`;
    msg += `<td>${b}</td>`;
    msg += `<td>${c}</td>`;
    msg += "</tbody>";
    msg += "</table>";
    return msg;
}