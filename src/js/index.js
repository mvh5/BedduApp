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

