document.querySelector('#btn').addEventListener('click', ()=> {

    //declarando arrays
    //posição     0             1        2        3
    let vetor=['Guilherme', 'Ghabys', 'Aurora', 'Js'];
    /* let listagem=' ';

    imprimir elemesntos em cada linha 
    for(let posicao=0;posicao<vetor.length;posicao++) {
        listagem=listagem+vetor[posicao]+'<br>';
    }

    document.write(listagem); */

    //alguns métodos dos vetores 
    document.write(vetor);

    /* saltar linha */
    document.write('<br>');

    //inverter posiçõa dos elemnetos
    document.write(vetor.reverse());

    /* saltar linha */
    document.write('<br>');

    /* classificar os elementos do vetor - ordem aleatória */
    document.write(vetor.sort()); //metodo

    /* saltar linha */
    document.write('<br>');

    /* tamanho do vetor - número de elementos */
    document.write(vetor.length); //propriedade
});