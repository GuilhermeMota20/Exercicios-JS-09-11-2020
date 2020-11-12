document.querySelector('#btn').addEventListener('click', () => {

    let qtd=parseInt(document.getElementById('qtd').value);
    let preco=parseFloat(document.getElementById('preco').value);
    let total=qtd*preco;

    /* calculando valor do desconto */
    //se qtd<=5 2% | qtd>5 e qtd<=10 3% | qtd>10 5%
    // 3 respostas= numero de ifs=n repostas -1 (2ifs)
    // 2% sobre valor= 2/100*valor
    let desconto,valorpagar;
    if (qtd<=5) {
        desconto= 2/100*total;
    }
    else if (qtd>5 && qtd<=10) {
        desconto= 3/100*total;
    }
    else {
        desconto= 5/100*total;
    }

    /* calcular o valor a pagar */
    valorpagar=total-desconto;

    /* formatar os valores */
    total=total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    
    desconto=desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    valorpagar=valorpagar.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    /* exibir os resultados */
    document.getElementById('total').value=total;

    document.getElementById('desc').value=desconto;

    document.getElementById('totalpagar').value=valorpagar;
});




/* mostrar senha | olho aberto */
document.querySelector('#btn1').addEventListener('click', () => {

    let senha=document.getElementById('senha');
    document.getElementById('btn1').style.display='none';
    document.getElementById('btn2').style.display='inline';

    if (senha.type=='password'){
        senha.type='text';
    }
});


/* olho fechado */
document.querySelector('#btn2').addEventListener('click', () => {

    let senha=document.getElementById('senha');

    if (senha.type=='text') {
        senha.type='password';
        document.getElementById('btn1').style.display='inline';
        document.getElementById('btn2').style.display='none';
    }
});
