const bd_juego = [
    {
        id: 0,
        pregunta: "Un archivo o conjunto de archivos múltiples informaciones que, de alguna forma, guardan relación:",
        op0: "Un Sistema Gestor de Bases de Datos (SGBD)",
        op1: "una aplicación informática para el manejo de bases de datos",
        op2: "una base de datos",
        op3: "ninguna de las anteriores",
        correcta: "2"
    },
    {
        id: 1,
        pregunta: "De los siguientes acrónimos, indica cuál es un Sistema Gestor de Bases de datos (SGBD):",
        op0: "EXCEL",
        op1: "MYSQL",
        op2: "BASE",
        op3: "ninguno de los anteriores",
        correcta: "1"
    },
    {
        id: 2,
        pregunta: "Estos iconos pertenecen a dos aplicaciones informáticos para bases de datos diferentes, pero ambos significan lo mismo:",
        op0: "Tablas",
        op1: "Formularios",
        op2: "Informes",
        correcta: "1"
    },
    {
        id: 3,
        pregunta: "En el contexto de una aplicación para bases de datos, este icono significa",
        op0: "Login o contraseña requerida",
        op1: "Campo o registro bloqueado",
        op2: "Clave o llave primaria (o principal)",
        correcta: "2"
    },
    {
        id: 4,
        pregunta: "¿Qué es una base de datos?",
        op0: "Una base de datos es un conjunto de información relacionada entre sí",
        op1: "El conjunto de valores que puede tomar un atributo",
        op2: "Uno o varios que sirvan para distinguir cada entidad en la relación",
        correcta: "0"
    },
    {
        id: 5,
        pregunta: "¿Qué es una relación?",
        op0: "Son vínculos entre tablas",
        op1: "Especifica si es necesario que exista un valor en un campo",
        op2: "Ambas son ciertas",
        correcta: "0"
    },
    {
        id: 6,
        pregunta: "¿Qué es una clave Principal?",
        op0: "Una clave principal identifica exclusivamente cada registro almacenado en la tabla",
        op1: "Una clave principal no permite duplicar registros en una tabla",
        op2: "Las dos anteriores son correctas",
        correcta: "2"
    },
    {
        id: 7,
        pregunta: "¿Qué es Microsoft SQL SERVER?",
        op0: "Para el juego",
        op1: "Sirve para borrar tu base de datos",
        op2: "SQL SERVER es el sistema de administración de bases de datos relacionales (RDBMS) de Microsoft",
        op3: "Ninguna de las anteriores",
        correcta: "2"
    },
    {
        id: 8,
        pregunta: "¿Quién es el creador de SQL?",
        op0: "Donald D. Chamberlin",
        op1: "Mark Zuckerberg",
        op2: "Bill Gates",
        correcta: "0"
    },
    {
        id: 9,
        pregunta: "¿Qué empresas utilizan bases de datos?",
        op0: "Apple",
        op1: "Facebook",
        op2: "Ambas son correctas",
        correcta: "2"
    }
];

let respuestas = [];
let cantiCorrectas = 0;
let numPregunta = 0;

function cargarPreguntas() {
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-preguntas";
    contenedor.id = "pregunta-" + pregunta.id;

    const h2 = document.createElement("h2");
    h2.textContent = (pregunta.id + 1) + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);

    const opciones = document.createElement("div");

    for (let i = 0; i < 4; i++) {
        if (pregunta[`op${i}`]) {
            const label = crearLabel(numPregunta, i, pregunta[`op${i}`]);
            opciones.appendChild(label);
        }
    }

    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

function crearLabel(numPregunta, numOpcion, txtOpcion) {
    const label = document.createElement("label");
    label.id = "1" + numPregunta + numOpcion;

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.value = numOpcion;

    input.addEventListener("click", () => seleccionar(numPregunta, numOpcion));

    const span = document.createElement("span");
    span.textContent = txtOpcion;

    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + numOpcion;

    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

function seleccionar(pos, opElegida) {
    respuestas[pos] = opElegida;
}

for (let i = 0; i < bd_juego.length; i++) {
    cargarPreguntas();
    numPregunta++;
}

let corregir = document.getElementById("corregir");
corregir.onclick = function() {
    cantiCorrectas = 0;

    for (let i = 0; i < bd_juego.length; i++) {
        const pregunta = bd_juego[i];
        const contenedorPregunta = document.getElementById("pregunta-" + i);
        if (pregunta.correcta == respuestas[i]) {
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            contenedorPregunta.className = "contenedor-preguntas correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        } else {
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            contenedorPregunta.className = "contenedor-preguntas incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }

    window.scrollTo(0, 0);

    let h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (bd_juego.length - cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}
