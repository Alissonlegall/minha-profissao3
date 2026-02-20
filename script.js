document.getElementById('btnInteracao').addEventListener('click', function() {
    const email = prompt("Digite seu e-mail para receber nosso guia de estudos:");
    if(email) {
        alert("Obrigado! Enviaremos o PDF com o Roadmap completo para " + email);
    }
});

// Efeito suave de rolagem (opcional)
console.log("Site de Carreira em Jogos carregado com sucesso!");