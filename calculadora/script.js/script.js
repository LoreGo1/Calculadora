function sumar() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    document.getElementById("resultado").innerText = "Resultado: " + (n1 + n2);
}

function restar() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    document.getElementById("resultado").innerText = "Resultado: " + (n1 - n2);
}

function multiplicar() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    document.getElementById("resultado").innerText = "Resultado: " + (n1 * n2);
}

function dividir() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    if (n2 === 0) {
        document.getElementById("resultado").innerText = "No se puede dividir entre 0";
    } else {
        document.getElementById("resultado").innerText = "Resultado: " + (n1 / n2);
    }
}

function potencia() {
    let n1 = parseFloat(document.getElementById("numero1").value);

    document.getElementById("resultado").innerText = "Resultado: " + (n1 ** 2);
}

function raiz() {
    let n1 = parseFloat(document.getElementById("numero1").value);

    if (n1 < 0) {
        document.getElementById("resultado").innerText = "No existe raíz real";
    } else {
        document.getElementById("resultado").innerText = "Resultado: " + Math.sqrt(n1);
    }
}