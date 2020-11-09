document.querySelector('#botao').addEventListener('click', ()=> {
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let n3=parseInt(document.getElementById('n3').value);
    let n4=parseInt(document.getElementById('n4').value);
    let q1,q2,q3,q4;

    q3=Math.pow(n3,2);

    /* console.log não é para o usuario e sim para o desenvolvedor */
    console.log('Valor de q3 - linha 7= '+q3)

    if (q3>=1000) {
        document.getElementById('resultado').innerHTML=q3;
    }
    else {
        q1=Math.pow(n1,2);
        q2=Math.pow(n2,2);
        q4=Math.pow(n4,2);

        document.getElementById('resultado').innerHTML=n1+' quadrado= '+q1+'<br>'
        +n2+' quadrado= '+q2+'<br>'+
        +n3+' quadrado= '+q3+'<br>'+
        +n4+' quadrado= '+q4;
    }
})