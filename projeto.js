const form = document.getElementById("formContato");
const retorno = document.getElementById("retorno");
const btnVoltar = document.getElementById("btnVoltar");

btnVoltar.addEventListener("click", function () {

    // Troca de cor ao clicar
    btnVoltar.classList.add("ativo");

    // Pequeno atraso para o usuário ver a mudança de cor
    setTimeout(() => {
        // voltar para o menu/nav
         document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
    }, 200);
});


// BOTÃO VOLTAR
btnVoltar.addEventListener("click", function () {
    const nav = document.getElementById("menu");

    if (nav) {
        nav.scrollIntoView({
            behavior: "smooth"
        });
    }
});


// FORMULÁRIO
form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        retorno.textContent = "❌ Preencha todos os campos.";
        retorno.className = "erro";
        return;
    }

    // Simulação de envio
    console.log({
        nome,
        email,
        assunto,
        mensagem
    });

    retorno.textContent = "✅ Mensagem enviada com sucesso!";
    retorno.className = "sucesso";

    form.reset(); // limpa o formulário
});