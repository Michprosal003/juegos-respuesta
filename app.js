
const bd_juego=[
    {

id:0,
pregunta:"Un archivo o conjunto de archivos multiples informaciones que, de alguna forma, guardan relacion:",
op0:"Un Sistema Gestor de Bases de Datos (SGBD)",
op1:"una aplicacion informatica para el manejo de bases de datos",
op2:"una base de datos",
op3:" ninguna de las anteriores",

correcta:"2"

},



{

    id:1,
    pregunta:"De los siguientes acronimos, indica cual es un Sistema Gestor de Bases de datos(SGBD):",
    op0:"EXCEL",
    op1:"MYSQL",
    op2:"BASE",
    op3:"ninguno de los anteriores",
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta:"Estos iconos pertenecen a dos aplicaciones informaticos para bases de datos diferentes, pero ambos significan lo mismo:",
        op0:"Tablas",
        op1:"Formularios",
        op2:"Informes",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta:"En el contexto de una aplicacion para bases de datos, este icono significa",
            op0:"Login o contraseña requerida",
            op1:"Campo o registro bloqueado",
            op2:"Clave o llave primaria(o principal)",
        
            
            correcta:"2"
            
            },


            {

                id:4,
                pregunta:"Que es una base de datos",
                op0:"Una base de datos es un conjunto de informatico relacionada entre si",
                op1:"El conjunto de valores que puede tomar un atributo",
                op2:"Uno o varios que sirvan para distinguir cada entidad en la relacion",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta:"¿Que es una relacion?",
                    op0:"Son vinculos entre tablas",
                    op1:"Especifica si es necesario que exista un valor en un campo",
                    op2:"ambas son ciertas",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta:"¿Que es una clave Principal?",
                        op0:"Una clave principal identifica exclusivamente cada registro almacenado en la tabla",
                        op1:"una clave principal no permite duplicar registros en una tabla",
                        op2:"las dos anteriores son correctas",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta:"¿Que es Microsoft SQL SERVER?",
                            op0:"Para el juego",
                            op1:"Sirve para borrar tu base de datos",
                            op2:"SQL SERVER es el sistema de administracion de bases de datos relacionales(RDBMS)de Microsoft",
                            op3:" ninguna de las anteriores",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta:"¿Quien es el creador de SQL ?",
                                op0:"Donald D. Chamberlin",
                                op1:"Mark Zuckberger",
                                op2:"Bill Gates",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta:"¿Que empresas utilizan bases de datos?",
                                    op0:"Apple",
                                    op1:"Facebook",
                                    op2:"ambas son correctas",
                                 
                                    
                                    correcta:"2"
                                    
                                    },


                
]



// para guardar las respuestas elegidas

let respuestas=[];

let cantiCorrectas=0;

let numPregunta=0;


function cargarPreguntas() 


{

    const pregunta=bd_juego [numPregunta];

    const contenedor =document.createElement("div");

    contenedor.className="contenedor-preguntas";
    contenedor.id=pregunta.id;
    

const h2= document.createElement("h2");


h2.textContent = pregunta.id + 1 +" - " + pregunta.pregunta;
contenedor.appendChild(h2);
const opciones = document.createElement("div");


const label1=crearLabel("0",pregunta.op0);
const label2=crearLabel("1",pregunta.op1);
const label3=crearLabel("2",pregunta.op2);


opciones.appendChild(label1);
opciones.appendChild(label2);
opciones.appendChild(label3);

contenedor.appendChild(opciones);
document.getElementById("juego").appendChild(contenedor);



}



function crearLabel(num,txtOpcion) 
{
    const label=document.createElement("label");

label.id= "1" +numPregunta + num;


const input=document.createElement("input");
input.setAttribute("type","radio");
input.name="p" + numPregunta;



input.setAttribute("onclick", "seleccionar("+numPregunta+","+num+")");


const span=document.createElement("span");
const correccion=document.createElement("span");
correccion.id="p" + numPregunta+num;


span.textContent=txtOpcion;
label.appendChild(input);
label.appendChild(span);
label.appendChild(correccion);

return label;



}



for(i=0; i < bd_juego.length;i++) 
{
    cargarPreguntas();

    numPregunta++;
}



function seleccionar(pos,opElegida) {
respuestas[pos]=opElegida;


}


let corregir =document.getElementById("corregir");
corregir.onclick=function() 

{

    for(i=0; i < bd_juego.length;i++) 

    {

        const pregunta=bd_juego[i];
        if(pregunta.correcta == respuestas[i])

        {
            cantiCorrectas++;
            let idCorreccion ="p"+ i + pregunta.correcta;

            document.getElementById(i).className="contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML="&check;";
            document.getElementById(idCorreccion).className="acierto";
        }
        


        else 


        {
            let id="p" + i + respuestas[i];
            let idCorreccion="p" + i + pregunta.correcta;

            document.getElementById(i).className="contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML="&#x2715;";
            document.getElementById(id).className="no-acierto";
            document.getElementById(idCorreccion).innerHTML="&check;";
            document.getElementById(idCorreccion).className="acierto";

        }
    }



    let inputs = document.getElementsByTagName("input");
    for(i=0; i<inputs.length;i++) 
    {

        inputs[i].disabled=true;
    }





    window.scrollTo(0,0);

    h2 =document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);

}









