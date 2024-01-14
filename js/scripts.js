const tela = document.getElementById('interno-visorCalc')

const allNum = [0,1,2,3,4,5,6,7,8,9]
const allOperations = ['somar', 'subtrair', 'multiplicar', 'dividir', 'raiz', 'porcentagem']

const equalToDo = []

let primeiroValor = 0
let sengundoValor = 0
let opVerif = ""
let handleEqualVerf = false

//FUNÇÕES INDIRETAS
function clearTela() {
    if (equalToDo.length < 1 || handleEqualVerf == true) {
        tela.innerText = ''
        funcHandleEqual()
    } else {
        return
    }
}

function funcHandleEqual() {
    if (handleEqualVerf == true) {
        equalToDo.splice(0,8)
    } else {
        return
    }
}

function zeroNotStartNum() {
    if (equalToDo[0] == 0 && equalToDo[1] != '.') {
        tela.innerText = ''
        equalToDo.splice(0)
    } else {
        return
    }
}

function somar(num1,num2){
    return num1 + num2
}

function subtrair(num1,num2){
    return (num1 - num2)
}

function multiplicar(num1,num2){
    return (num1 * num2)
}

function dividir(num1,num2){
    return (num1 / num2)
}

function raizQuadrada(num1){
    return Math.sqrt(num1)
}

function porcentagem(num1){
    return (num1 / 100)
}

//FUNÇÕES BOTÕES NUMÉRICOS
function click0() {
    if (equalToDo.length < 8) {
        clearTela()
        handleEqualVerf = false

        const num0String = '0'
        const num0Number = Number(num0String)
        if (equalToDo[0] == 0 && equalToDo < 1) {
            return
        } else {
            equalToDo.push(num0Number)
            tela.append(allNum[num0Number])
            console.log(equalToDo)
        }
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click1() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num1String = '1'
        const num1Number = Number(num1String)
        equalToDo.push(num1Number)
        tela.append(allNum[num1Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click2() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num2String = '2'
        const num2Number = Number(num2String)
        equalToDo.push(num2Number)
        tela.append(allNum[num2Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click3() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num3String = '3'
        const num3Number = Number(num3String)
        equalToDo.push(num3Number)
        tela.append(allNum[num3Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click4() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num4String = '4'
        const num4Number = Number(num4String)
        equalToDo.push(num4Number)
        tela.append(allNum[num4Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click5() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num5String = '5'
        const num5Number = Number(num5String)
        equalToDo.push(num5Number)
        tela.append(allNum[num5Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click6() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num6String = '6'
        const num6Number = Number(num6String)
        equalToDo.push(num6Number)
        tela.append(allNum[num6Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click7() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num7String = '7'
        const num7Number = Number(num7String)
        equalToDo.push(num7Number)
        tela.append(allNum[num7Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click8() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num8String = '8'
        const num8Number = Number(num8String)
        equalToDo.push(num8Number)
        tela.append(allNum[num8Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

function click9() {
    if (equalToDo.length < 8) {
        clearTela()
        zeroNotStartNum()
        handleEqualVerf = false

        const num9String = '9'
        const num9Number = Number(num9String)
        equalToDo.push(num9Number)
        tela.append(allNum[num9Number])
        console.log(equalToDo)
    } else {
        console.log('erro')
        console.log(equalToDo)
    }
}

//FUNÇÕES DAS OPERAÇÕES
function clickAC() {
    tela.innerText = '0'
    equalToDo.splice(0,8);
}

function clickRaiz() {
    tela.innerText = ''
    const tlcRaiz = '√'
    
    primeiroValor = Number(equalToDo.join(''))
    tela.append(tlcRaiz+primeiroValor)
    equalToDo.splice(0,8)

    console.log(primeiroValor)

    opVerif = allOperations[4]

    console.log(opVerif)
}

function clickPorcent() {
    const tlcPorcent = '%'
    tela.append(tlcPorcent)

    primeiroValor = Number(equalToDo.join(''))
    equalToDo.splice(0,8)

    console.log(primeiroValor)

    opVerif = allOperations[4]

    console.log(opVerif)
}

function clickDivide() {
    const tlcMult = '/'
    tela.append(tlcMult)

    primeiroValor = Number(equalToDo.join(''))
    equalToDo.splice(0,8)

    console.log(primeiroValor)

    opVerif = allOperations[3]

    console.log(opVerif)
}

function clickMult() {
    const tlcMult = '*'
    tela.append(tlcMult)

    primeiroValor = Number(equalToDo.join(''))
    equalToDo.splice(0,8)

    console.log(primeiroValor)

    opVerif = allOperations[2]

    console.log(opVerif)
}

function clickSub() {
    const tlcSub = '-'
    tela.append(tlcSub)

    primeiroValor = Number(equalToDo.join(''))
    equalToDo.splice(0,8)

    console.log(primeiroValor)

    opVerif = allOperations[1]

    console.log(opVerif)
}

function clickSum() {
    const tlcSum = '+'
    tela.append(tlcSum)

    primeiroValor = Number(equalToDo.join(''))
    equalToDo.splice(0,8)

    console.log(primeiroValor)

    opVerif = allOperations[0]

    console.log(opVerif)
}

function clickEqual() {
    sengundoValor = Number(equalToDo.join(''))
    handleEqualVerf = true
    
    switch(opVerif) {
        case 'somar':
            tela.innerText = ''
            console.log('resultado aqui em baixo')
            tela.append(somar(primeiroValor,sengundoValor))
            equalToDo.splice(0,8)
            equalToDo.push(somar(primeiroValor,sengundoValor))
            break;
        case 'subtrair':
            tela.innerText = ''
            console.log('resultado aqui em baixo')
            tela.append(subtrair(primeiroValor,sengundoValor))
            equalToDo.splice(0,8)
            equalToDo.push(subtrair(primeiroValor,sengundoValor))
            break;
        case 'multiplicar':
            tela.innerText = ''
            tela.append(multiplicar(primeiroValor,sengundoValor))
            equalToDo.splice(0,8)
            equalToDo.push(multiplicar(primeiroValor,sengundoValor))
            break;
        case 'dividir':
            tela.innerText = ''
            tela.append(dividir(primeiroValor,sengundoValor))
            equalToDo.splice(0,8)
            equalToDo.push(dividir(primeiroValor,sengundoValor))
            break;
        case 'raiz':
            tela.innerText = ''
            tela.append(raizQuadrada(primeiroValor))
            equalToDo.splice(0,8)
            equalToDo.push(raizQuadrada(primeiroValor))
            break;
        default:
            tela.innerText = ''
            porcentagem(primeiroValor)
            tela.append(porcentagem(primeiroValor,sengundoValor))
            equalToDo.splice(0,8)
            equalToDo.push(porcentagem(primeiroValor,sengundoValor))
    }
}

function clickDot() {
    const dotString = '.'

    if (equalToDo.length < 1 || equalToDo.length > 1) {
        return
    } else {
        equalToDo.push(dotString)
        tela.append(dotString)
        console.log(equalToDo)
    }
}