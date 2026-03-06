document.addEventListener('DOMContentLoaded', () => {
    // Referências dos Elementos
    const btnPost = document.getElementById('postComment');
    const container = document.getElementById('commentsContainer');
    const inputName = document.getElementById('userName');
    const inputText = document.getElementById('commentText');
    const btnInteracao = document.getElementById('btnInteracao');

    // Evento do botão do Footer (original)
    btnInteracao.addEventListener('click', () => {
        alert('O seu Guia de Estudos será enviado para o seu e-mail em breve!');
    });

    // Lógica de Comentários
    btnPost.addEventListener('click', () => {
        const name = inputName.value.trim();
        const text = inputText.value.trim();

        if (name && text) {
            adicionarComentario(name, text);
            inputName.value = '';
            inputText.value = '';
        } else {
            alert("Por favor, preencha todos os campos antes de publicar.");
        }
    });

    function adicionarComentario(name, text) {
        const dataAtual = new Date().toLocaleDateString('pt-BR');
        
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-card');
        
        commentDiv.innerHTML = `
            <div class="comment-header">
                <strong>${name}</strong>
                <span style="font-size: 0.8rem; color: #94a3b8;">${dataAtual}</span>
            </div>
            <p class="comment-text">${text}</p>
            <div class="like-bar">
                <button class="btn-like">❤️ <span class="like-count">0</span></button>
            </div>
        `;

        // Lógica interna de Like para este comentário específico
        const likeBtn = commentDiv.querySelector('.btn-like');
        const countSpan = commentDiv.querySelector('.like-count');
        let likes = 0;
        let jaCurtiu = false;

        likeBtn.addEventListener('click', () => {
            if(!jaCurtiu) {
                likes++;
                likeBtn.classList.add('active');
                jaCurtiu = true;
            } else {
                likes--;
                likeBtn.classList.remove('active');
                jaCurtiu = false;
            }
            countSpan.innerText = likes;
        });

        // Adiciona o novo comentário no topo da lista
        container.prepend(commentDiv);
    }
});