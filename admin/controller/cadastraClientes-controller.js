import { clienteService} from '../service/cliente-service.js'


const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault() //previno o comportamento padrao de checar sem ver oq tem dentro
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    try {
        await clienteService.criaClientes(nome, email);
        // Redireciona para outra página após o cadastro do cliente
        window.location.href = '../telas/cadastro_concluido.html';
    } catch (erro) {
        console.log(erro)
            window.location.href = '../telas/erro.html'
        // Trate o erro conforme necessário (exibindo mensagem de erro, etc.)
    }

})



// falta async await e try catch