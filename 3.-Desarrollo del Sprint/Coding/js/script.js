function calcularTriangulo() {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);
    const resultado = document.getElementById('resultado');

    var comentario = document.getElementById("comentario");    
    var textoComentario = document.getElementById("textoComentario");

    // Después de calcular, deshabilitar los inputs
    document.getElementById('ladoA').disabled = true;
    document.getElementById('ladoB').disabled = true;
    document.getElementById('ladoC').disabled = true;

    // Deshabilitar el botón Calcular
    document.getElementById('btnCalcular').disabled = true;

    // Verificar si algún campo está vacío o contiene un número negativo
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        textoComentario.innerHTML = "Debes llenar todos los campos.";
        comentario.style.right = "630px"; // Cambia la posición para que sea visible
        return; // Detener la ejecución si algún campo no está lleno o contiene un valor negativo
    }

     // Verificar si algún campo está vacío o contiene un número negativo
     if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        textoComentario.innerHTML = "Debes llenar todos los campos con valores positivos.";
        comentario.style.right = "630px"; // Cambia la posición para que sea visible
        return; // Detener la ejecución si algún campo no está lleno o contiene un valor negativo
    }

    if (esTriangulo(ladoA, ladoB, ladoC)) {
        const tipo = calcularTipo(ladoA, ladoB, ladoC);
        const area = calcularArea(ladoA, ladoB, ladoC);
        const perimetro = calcularPerimetro(ladoA, ladoB, ladoC);
        resultado.innerHTML = `Tipo: ${tipo}<br>Área: ${area.toFixed(2)}<br>Perímetro: ${perimetro}`;
    } else {
        textoComentario.innerHTML = "Los lados proporcionados no forman un triángulo. La desigualdad triangular, dice que la suma de las longitudes de dos lados de un triángulo siempre debe ser mayor que la longitud del tercer lado";
        comentario.style.right = "630px"; // Cambia la posición para que sea visible
    }
}


function esTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function calcularTipo(a, b, c) {
    const imgElement = document.getElementById('imagenTriangulo');
    imgElement.style.display = 'block'; // Asegúrate de que la imagen sea visible

    if (a === b && b === c) {
        imgElement.src = 'assets/images/Triangulo-Equilatero-1024x724.jpg';
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        imgElement.src = 'assets/images/Triangulo-Isosceles-1024x724.jpg';
        return "Isósceles";
    } else {
        imgElement.src = 'assets/images/Triangulo-Escaleno-1024x724.jpg';
        return "Escaleno";
    }
}


function calcularArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function calcularPerimetro(a, b, c) {
    return a + b + c;
}

function resetearFormulario() {
    // Resetea los valores de los inputs
    document.getElementById('ladoA').value = '';
    document.getElementById('ladoB').value = '';
    document.getElementById('ladoC').value = '';

    // Habilitar los inputs
    document.getElementById('ladoA').disabled = false;
    document.getElementById('ladoB').disabled = false;
    document.getElementById('ladoC').disabled = false;

    // Habilitar el botón Calcular
    document.getElementById('btnCalcular').disabled = false;

    // Oculta la imagen y limpia el textoComentario
    const imgElement = document.getElementById('imagenTriangulo');
    const resultado = document.getElementById('resultado');

    var comentario = document.getElementById("comentario");    
    var textoComentario = document.getElementById("textoComentario");

    comentario.style.right = "-400px"; // Cambia la posición para que sea visible
    imgElement.style.display = 'none';
    imgElement.src = '';
    textoComentario.textContent = '';
    resultado.textContent = '';
}




