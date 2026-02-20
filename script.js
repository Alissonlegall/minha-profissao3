document.getElementById('btnInteracao').addEventListener('click', function() {
    const email = prompt("Digite seu e-mail para receber nosso guia de estudos para Game Programmers:");
    if(email) {
        alert("Excelente escolha! O roadmap para se tornar um Game Programmer foi enviado para: " + email);
    }
});

console.log("Guia de Carreira DevGames carregado com sucesso!");