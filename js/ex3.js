document.querySelector('#botao').addEventListener('click', () => {
    let nome=document.getElementById('nome').value;
    let linha=' ';

    for (let i=1; i<=200; i++) {
        linha=linha+i+' - '+nome+'<br>';
    }
    document.getElementById('resultado').innerHTML=linha;

})