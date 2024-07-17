let form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let a = document.querySelector("#a").value.trim();
    let b = document.querySelector("#b").value.trim();
    let c = document.querySelector("#c").value.trim();
    let error = document.querySelector("#error");
    let mensaje = document.querySelector("#mensaje");
    let tabla = document.querySelector("#tabla");
    if (a === "" || b === "" || c === "") {
        error.innerHTML = "Por favor no deje ningún campo vacío";
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        error.innerHTML = "Por favor ingrese solo números";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);

        if (a !== Math.trunc(a) || b !== Math.trunc(b) || c !== Math.trunc(c)) {
            error.innerHTML = "Por favor solo ingrese números enteros";
        } else {
            let d = discriminante(a, b, c);
            let x1 = 0, x2 = 0;
            if (d < 0) {
                mensaje.innerHTML = ecuacion();
                form.style.display = "none"
                document.querySelector("#regresarError").addEventListener("click", () => {
                    limpiar();
                    mensaje.innerHTML = "";
                    form.style.display = "block";
                    
                });
            } else if (d === 0) {
                x1 = (-b) / (2 * a);
                x2 = x1;
                tabla.innerHTML = listar(a, b, c, x1, x2);
                form.style.display = "none"
                document.querySelector("#regresar").addEventListener("click", () => {
                    limpiar();
                    tabla.innerHTML = "";
                    form.style.display = "block";
                });
            } else if (d > 0) {
                x1 = (-b + Math.sqrt(d)) / (2 * a);
                x2 = (-b - Math.sqrt(d)) / (2 * a);
                tabla.innerHTML = listar(a, b, c, x1, x2);
                form.style.display = "none"
                document.querySelector("#regresar").addEventListener("click", () => {
                    limpiar();
                    tabla.innerHTML = "";
                    form.style.display = "block";
                    
                });
            }
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

let limpiar = ()=>{
    let a = document.querySelector("#a");
    let b = document.querySelector("#b");
    let c = document.querySelector("#c");
    a.value = "";
    b.value = "";
    c.value = "";
}
let discriminante = (a, b, c) => Math.pow(b, 2) - 4 * a * c;

let listar = (a, b, c, x1, x2) => {
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
    msg += `<td>${x1}</td>`;
    msg += `<td>${x2}</td>`;
    msg += "</tbody>";
    msg += "</table>";
    msg += "<input type='button' id='regresar' value='Regresar' class='btn-primary btn form-control' style='width: 33%;'>";
    return msg;
}

let ecuacion = () => {
    let m = "";
    m += "<div>";
    m += "<p style='font-size: 3vw;color: red;text-align: center;' id='mensajeError'>La ecuación no tiene solución real porque el discriminante es negativo.</p>";
    m += "<input type='button' id='regresarError' value='Regresar' class='btn-primary btn form-control' style='width: 33%; margin-left:66.6%;'>";
    m += "</div>";
    return m;
}
