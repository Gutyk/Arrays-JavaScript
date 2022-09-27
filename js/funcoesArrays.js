//Calculo comum e print
function calcular1(n1, n2) {
    let resultado = (n1 + n2);
    document.querySelector('#exemplo1').textContent += `${resultado} `;
}

calcular1(5, 6);
calcular1(5, 2);
calcular1(8, 5);
calcular1(2, 7);

//Multiplicação com random
function calcular2(fn, sn) {
    return fn * sn;
}

const firstNumber = Math.round(Math.random() * 100);
const secondNumber = Math.round(Math.random() * 100);

const resultado = calcular2(firstNumber, secondNumber);
document.querySelector('#exemplo2').textContent = `${firstNumber} * ${secondNumber} = ${resultado}`;


//Array
const people = [' Eu', ' Tu', ' Ele', ' Nós', ' Vós', ' Eles'];
document.querySelector('#exemplo3').textContent = people;

//Inserir índice
people.push(' Dath Vader');
document.querySelector('#exemplo4').textContent = people;

//Excluindo o último índice
const excludedPeople = [];
excludedPeople.push(people.pop());
document.querySelector('#exemplo5').textContent = excludedPeople;

//Inserir o início de array
people.unshift(' Mestre Yoda')
document.querySelector('#exemplo6').textContent = people;

//Exluir o primeiro índice do array
excludedPeople.push(people.shift());
document.querySelector('#exemplo7').textContent = excludedPeople;

//Excluir em qualquer posição do array
people.splice(2, 2);
//Nesse exemplo começa no índice - exclui o 2 e o 3
document.querySelector('#exemplo8').textContent = people;

//Inserir em qualquer posição do array
people.splice(2, 0, ' Ele', ' Nós', ...excludedPeople);
document.querySelector('#exemplo9').textContent = people;

//Aplicando um estilo ao array de pessoas usando o forEach()
people.forEach(pessoa => {
    //criar parágrafo
    const paragrafo = document.createElement('p');
    //colocar o conteúdo no parágrafo
    paragrafo.textContent = pessoa;
    //aplicar um estilo
    paragrafo.classList.add('bg-danger', 'text-light');    
    //inserndo o novo p na div
    document.querySelector('#exemplo10').appendChild(paragrafo);
});

