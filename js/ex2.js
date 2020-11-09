document.querySelector('#botao').addEventListener('click', () => {
    /*  alterando a cor da fonte pelo js */
    /* getElementsByTagName pode pegar mais de um elemento portanto ele criara um array e a primeira posição do array é a posição */
    document.getElementsByTagName('h1')[0].style.color='tomato';
    document.getElementsByTagName('h1')[1].style.fontSize='50px';
    document.getElementsByTagName('h1')[1].style.color='orangered';

    /* tabuada */
    let resultado, resposta= ' ';
    let num=parseInt(document.getElementById('num').value);
    /* criando um laço de repetição */
    for (let i=1; i<=10; i++) {
        resultado=num*i;
        resposta=resposta+num+' X '+i+' = '+resultado+ '<br>';
    }

    document.getElementById('resultado').innerHTML=resposta+ '<br>';

})