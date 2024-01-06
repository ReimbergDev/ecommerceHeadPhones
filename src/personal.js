const form = document.querySelector(".formP");



function coletarRespostas() {
    // Obter respostas do usuário
    const corFone = document.getElementById('corFone').value;
    const abafadorFone = document.getElementById('abafadorFone').value;
    const adesivarFone = document.getElementById('adesivarFone').value;
    const tamanhoFone = document.getElementById('tamanhoFone').value;

    // Exibir respostas (você pode fazer o que quiser com essas respostas)
    alert(`Respostas:\nCor do Fone: ${corFone}\nAbafador no Fone: ${abafadorFone}\nAdesivar o Fone: ${adesivarFone}\nTamanho do Fone: ${tamanhoFone}`);
}