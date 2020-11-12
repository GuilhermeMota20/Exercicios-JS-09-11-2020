document.querySelector('#btn').addEventListener('click', ()=> {
    let numeros=document.getElementById('num').value;
    let numeros=numeros.split(',');

    /* retirar as aspas dos numeros */
    for(let i=0; i<numeros.length;i++) {
        numeros[i]=parseInt(numeros[i]);


    /* se estiver return a-b -- ordem crescente
    se estiver return b-a -- ordem decrescente */
    numeros=numeros.sort(function(a,b){return a-b}); //ordeno
    document.write('<br>');
    document.write('Mior número é: '+mumeros.pop());
});