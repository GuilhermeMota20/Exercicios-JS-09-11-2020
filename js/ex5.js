document.querySelector('#btn').addEventListener('click', ()=> {

    //declarando arrays
    //posição     0             1         2       3
    let vetor=['Guilherme', 'Ghabys', 'Aurora', 'Js'];
    let listagem=' ';

    /* imprimir elemesntos em cada linha */
    for(let posicao=0;posicao<vetor.length;posicao++) {
        listagem=listagem+vetor[posicao]+'<br>';
    }

    document.write(listagem);
});