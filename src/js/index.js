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

    return sumView.renderSumView(resultado)
})

document.querySelector("#restar").addEventListener(("click"), () => {
    event.preventDefault()
    restaView.clearArea();

    const numA = restaView.parseInputs(restaView.getInputNumA)
    const numB = restaView.parseInputs(restaView.getInputNumB)

    const resultado = Resta(numA,numB);
    return restaView.renderRestaView(resultado)
})

document.querySelector("#dividir").addEventListener(("click"), () => {
    event.preventDefault()
    divisionView.clearArea();

    const numA = divisionView.parseInputs(divisionView.getInputNumA)
    const numB = divisionView.parseInputs(divisionView.getInputNumB)

    const resultado = Division(numA,numB);
    return divisionView.renderDivisionView(resultado)
})

document.querySelector("#multiplicar").addEventListener(("click"), () => {
    event.preventDefault()
    multiplicacionView.clearArea();

    const numA = multiplicacionView.parseInputs(multiplicacionView.getInputNumA)
    const numB = multiplicacionView.parseInputs(multiplicacionView.getInputNumB)

    const resultado = Multiplicacion(numA,numB);
    return multiplicacionView.renderMultiplicacionView(resultado)
})

//Fin calculadora