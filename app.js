function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    // Condição que testa se é possível realizar o sorteio
    if (quantidade > (ate-(de-1))){
        alert('A Quantidade é maior que os resultados possíveis');
    }
    else{
        for (i = 0; i < quantidade;i++){
            numero = obterNumeroAleatorio(de,ate);
            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de,ate);
            }
            sorteados.push(numero);
            alterarStatusBotao();
        }
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    }
}
function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    alterarStatusBotao();
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}