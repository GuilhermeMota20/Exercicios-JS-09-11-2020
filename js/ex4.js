document.querySelector('#btn').addEventListener('click', () => {
    let qtd=parseInt(document.getElementById('qtd').value);
    let preco=parseFloat(document.getElementById('preco').value);
    let total=qtd*preco;
    total=total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    document.getElementById('total').value=total;

})