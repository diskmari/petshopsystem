import { clienteService } from "../service/cliente-service.js"
const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td="3">${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
        `

    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id

    return linhaNovoCliente

}

const tabela = document.querySelector('[data-tabela]') // percorre a arvore do DOM p buscar a tabela

tabela.addEventListener('click', async (evento) => { // evento do click assincrono
    let ehBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir' // quero saber o alvo do meu evento
    if(ehBotaoDeletar){ // verifica se clicou
        try {
        const linhaCliente = evento.target.closest('[data-id]') // remove a linha inteira
        let id = linhaCliente.dataset.id // id da linha pai
        await clienteService.removeCliente(id) // com o await ela vira estruturada substitui o .THEN
            linhaCliente.remove() // remove
        }
        catch (erro){
            console.log(erro)
            window.location.href = '../telas/erro.href'
        }
    }
})

const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes() // recebendo e devolvendo promises (RESPOSTAS ) e devolvendo dados na tela
        //entao faz loop e exibe na tela
               listaClientes.forEach(elemento => {
                   tabela.appendChild(criaNovaLinha(elemento.nome,
                   elemento.email, elemento.id))
                       
                   
       })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }

}


render()


