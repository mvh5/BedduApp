// IMPORTACIONES
import Sum from './models/Sum'
import Resta from './models/Resta'
import Division from './models/Division'
import Multiplicacion from './models/Multiplicacion'

import * as sumView from './views/SumView'
import * as restaView from './views/RestaView'
import * as divisionView from './views/DivisionView'
import * as multiplicacionView from './views/MultiplicacionView'

import styles from '../css/style.css'
import sassStyles from '../scss/style.scss'

//Calculadora

document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()

    sumView.clearArea()

    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)

    const resultado = Sum(numA, numB)
    if (Number.isNaN(resultado) === false) {
        return sumView.renderSumView(resultado)
    }
})

document.querySelector("#restar").addEventListener(("click"), () => {
    event.preventDefault()
    restaView.clearArea();

    const numA = restaView.parseInputs(restaView.getInputNumA)
    const numB = restaView.parseInputs(restaView.getInputNumB)

    const resultado = Resta(numA,numB);
    if (Number.isNaN(resultado) === false) {
        return restaView.renderRestaView(resultado)
    }
})

document.querySelector("#dividir").addEventListener(("click"), () => {
    event.preventDefault()
    divisionView.clearArea();

    const numA = divisionView.parseInputs(divisionView.getInputNumA)
    const numB = divisionView.parseInputs(divisionView.getInputNumB)

    const resultado = Division(numA,numB);
    if (Number.isNaN(resultado) === false) {
        return divisionView.renderDivisionView(resultado)
    }
})

document.querySelector("#multiplicar").addEventListener(("click"), () => {
    event.preventDefault()
    multiplicacionView.clearArea();

    const numA = multiplicacionView.parseInputs(multiplicacionView.getInputNumA)
    const numB = multiplicacionView.parseInputs(multiplicacionView.getInputNumB)

    const resultado = Multiplicacion(numA,numB);
    //console.log(resultado);
    if (Number.isNaN(resultado) === false) {
        return multiplicacionView.renderMultiplicacionView(resultado)
    }
})

//Fin calculadora

/*
const piedraPapelTijera = (answer) => {
    
    var answers = ['piedra','papel','tijera'];
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    var computerAnswer = answers[randomNumber];
    console.log(computerAnswer);
}
*/
var answers = ['piedra','papel','tijera'];
var piedraButton = document.getElementById("piedra1ID");
var computerResultTag = document.getElementById("ComputerResult");
var quienGana = document.getElementById("whoWon");
/*piedraButton.onclick = function() {
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    
    var computerResult = answers[randomNumber];
    
    const markup = `
        <span>
            Computer Answer is ${computerResult}
        </span>
    `;
    computerResultTag.insertAdjacentHTML('beforeend',markup);

}; */
document.querySelector("#piedra1ID").addEventListener(("click"), () => {
    event.preventDefault()
    computerResultTag.innerHTML = "";
    quienGana.innerHTML="";
    var randomNumber = Math.floor((Math.random() * 3) );
    
    var computerResult = answers[randomNumber];

    const markup = `
        <span>
            Computer Answer is ${computerResult}
        </span>
    `;
    var resultadoFinal = "";
    if (computerResult === 'piedra') {
        resultadoFinal = "Empate"
    } else if (computerResult === 'papel') {
        resultadoFinal = 'Perdiste';
    } else {
        resultadoFinal = 'Ganaste'
    }
    const markup2 =  `
    <span>
        ${resultadoFinal}
    </span>
    `;

    computerResultTag.insertAdjacentHTML('beforeend',markup);
    quienGana.insertAdjacentHTML('beforeend',markup2);
})

document.querySelector("#papelID").addEventListener(("click"), () => {
    event.preventDefault()
    computerResultTag.innerHTML = "";
    quienGana.innerHTML="";
    var randomNumber = Math.floor((Math.random() * 3) );
    
    var computerResult = answers[randomNumber];

    const markup = `
        <span>
            Computer Answer is ${computerResult}
        </span>
    `;
    var resultadoFinal = "";
    if (computerResult === 'papel') {
        resultadoFinal = "Empate"
    } else if (computerResult === 'tijera') {
        resultadoFinal = 'Perdiste';
    } else {
        resultadoFinal = 'Ganaste'
    }
    const markup2 =  `
    <span>
        ${resultadoFinal}
    </span>
    `;

    computerResultTag.insertAdjacentHTML('beforeend',markup);
    quienGana.insertAdjacentHTML('beforeend',markup2);
})

document.querySelector("#tijeraID").addEventListener(("click"), () => {
    event.preventDefault()
    computerResultTag.innerHTML = "";
    quienGana.innerHTML="";
    var randomNumber = Math.floor((Math.random() * 3) );
    
    var computerResult = answers[randomNumber];

    const markup = `
        <span>
            Computer Answer is ${computerResult}
        </span>
    `;
    var resultadoFinal = "";
    if (computerResult === 'tijera') {
        resultadoFinal = "Empate"
    } else if (computerResult === 'piedra') {
        resultadoFinal = 'Perdiste';
    } else {
        resultadoFinal = 'Ganaste'
    }
    const markup2 =  `
    <span>
         ${resultadoFinal}
    </span>
    `;

    computerResultTag.insertAdjacentHTML('beforeend',markup);
    quienGana.insertAdjacentHTML('beforeend',markup2);
})


//fizz buzz

var fizzBuzzDiv = document.getElementById("answersFizz");
document.querySelector("#fizzButton").addEventListener(("click"),() => {
    event.preventDefault();
    fizzBuzzDiv.innerHTML = "";
    var num1 = parseInt(document.querySelector("#numberfizBuz").value);
    
    if (Number.isNaN(num1)) {
        
    } else {
        for (var i = 0; i < num1; i++) {
            var randomVal = Math.floor(Math.random() * 50) + 1;
            var cummString = ""+randomVal;
            if (randomVal % 3 == 0) {
                cummString+= " es FIZZ";
                if (randomVal % 5 == 0) {
                    cummString+="BUZZ";
                }
            } else if (randomVal % 5 == 0) {
                cummString+= " es BUZZ";
            }
            const markup =  `
                <h1 id="fizzAnswersID">
                    ${cummString}
                </h1>
                `;
            fizzBuzzDiv.insertAdjacentHTML('beforeend',markup);
        }
    }
    
})

//inicio tablas

class Empleado {
    constructor(nombre, area,sueldo) {
        this._nombre = nombre;
        this._area = area;
        this._sueldo = sueldo;
    }

    get getName() {
        return this._nombre;
    }

    get getSueldo() {
        return this._sueldo;
    }

    get getDepartment() {
        return this._area;
    }
}

class Empresa {
    constructor(nombre,empleados) {
        this._nombre = nombre;
        this._empleados = empleados;
    }

    agregarEmpleado(empleado) {
        this._empleados.push(empleado);
    }

    get getEmpleados() {
        return this._empleados;
    }

    imprimirEmpleados() {
        for (let i = 0; i < this._empleados.length; i++) {
            console.log(this._empleados[i].getName)
        }
    }
    calcularNominas(area) {
        if (area === "todos") {
            var sum = 0;
            for (let i = 0; i < this._empleados.length; i++) {
                sum+= this._empleados[i].getSueldo
            }
            return sum;
        } else {
            var sum = 0;
            for (let i = 0; i < this._empleados.length; i++) {
                //console.log(this._empleados[i].getDepartment);
                if (this._empleados[i].getDepartment === area) {
                    sum+= this._empleados[i].getSueldo
                }
            }
            return sum;
        }
    }
}

let empleado1 = new Empleado("Juan","Sistemas",100);
let empleado2 = new Empleado("Jon","HR",200);
let empleado3 = new Empleado("Perez","Finance",300);
var empleadosTodos = [empleado1,empleado2,empleado3];
let empresa1 = new Empresa("Bedu",empleadosTodos);
let empleado4 = new Empleado("Jimenez","HR",400);
empresa1.agregarEmpleado(empleado4);
let myTable = document.getElementById("tabla1");

let mostrarElementos = () => {
    myTable.innerHTML = `
    <tr>
        <th>Nombre</th>
        <th>Area</th>
        <th>Salario</th>
    </tr>
    `
 
    var todosLosEmpleados = empresa1.getEmpleados;
    for (let i = 0; i < todosLosEmpleados.length; i++) {
        var empleadoActual = todosLosEmpleados[i];
        let lineaNueva = document.createElement("tr");
        let column1 = document.createElement("td");
        column1.innerText = empleadoActual.getName;
        lineaNueva.appendChild(column1);

        let column2 = document.createElement("td");
        column2.innerText = empleadoActual.getDepartment
        lineaNueva.appendChild(column2);

        let column3 = document.createElement("td");
        column3.innerText = empleadoActual.getSueldo
        lineaNueva.appendChild(column3);

        myTable.appendChild(lineaNueva);
    }
}

mostrarElementos();

let agregarUno = () => {
    let newName = prompt("Nombre de la persona","null");
    
    let newDepartment = prompt("Nombre de su departamento","null");
    let newSalary = prompt("Cual es su salario?","null");
    let empleadoExtra = new Empleado(newName,newDepartment,parseInt(newSalary));
    empresa1.agregarEmpleado(empleadoExtra);
    mostrarElementos();
}

let calcularSueldoClick = () => {
    let deptNombre = prompt("Nombre del departamento","null")
    var sueldo = empresa1.calcularNominas(deptNombre);
    alert(`Sueldo de ${deptNombre} es ${sueldo}`)
}


document.querySelector("#agregarEmpleadoBoton").addEventListener(("click"), () => {
    event.preventDefault();
    agregarUno();
})

document.querySelector("#sueldoBoton").addEventListener(("click"), () => {
    event.preventDefault();
    calcularSueldoClick();
})

//canvas



let setPosition = (e) => {
    pos.x = e.clientX
    pos.y = e.clientY
    console.log(canv1.offsetLeft);
    console.log(canv1.offsetTop);
}

let resize = () => {
    ctx.canvas.width = innerWidth
    ctx.canvas.height = innerHeight
}
var strokeStyleCol1 = '#c0392b';
let draw = (e) => {
    if (e.buttons !== 1) return

    ctx.beginPath()

    ctx.lineWidth = 5
    ctx.lineCap = 'round'
     ctx.strokeStyle = strokeStyleCol1

    ctx.moveTo(pos.x, pos.y)
    setPosition(e);
    ctx.lineTo(pos.x, pos.y)

    ctx.stroke()
}

let draw2 = (e) => {
    if (e.buttons !== 1) return

    ctx.beginPath()

    ctx.lineWidth = 5
    ctx.lineCap = 'round'
     
    ctx.strokeStyle = changeColor()

    ctx.moveTo(pos.x, pos.y)
    setPosition(e);
    ctx.lineTo(pos.x, pos.y)

    ctx.stroke()
}

var canv1 = document.getElementsByTagName("canvas");
var ctx = canv1[0].getContext('2d');

resize();
var pos = { x: 0, y: 0 }

addEventListener('resize',resize);
document.addEventListener('mousemove', draw)
document.addEventListener('mousedown', setPosition)
document.addEventListener('mouseenter', setPosition)

function changeColor() {
    return  "#"+((1<<24)*Math.random()|0).toString(16);
}

document.querySelector("#cambiaColorBut").addEventListener(("click"), () => {
    event.preventDefault();
    document.removeEventListener('mousemove',draw2);
    document.addEventListener('mousemove', draw);
    strokeStyleCol1 = changeColor();
})

document.querySelector("#colorAle").addEventListener(("click"), () => {
    event.preventDefault();
    document.removeEventListener('mousemove',draw);
    document.addEventListener('mousemove', draw2);
})

document.querySelector("#limpiarBut").addEventListener(("click"), () => {
    event.preventDefault();
    ctx.clearRect(0, 0, innerWidth, innerHeight);
})
