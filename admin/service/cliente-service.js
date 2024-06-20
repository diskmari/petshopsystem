const listaClientes = () =>  { // faz conexao com a API
    return fetch('http://localhost:3000/profile') // quando eu pego a resposta eu faço algo com ela
    .then( resposta => {
        if(resposta.ok){
            return resposta.json() // transformo em js valido e return
        }
        throw new Error('Não foi possivel listar os clientes')

    })

  
}


const criaClientes = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'

        },
        body: JSON.stringify({
            nome: nome,
            email: email
            })

        })
        .then( resposta=> {
            if(resposta.ok){
                return resposta.body
            }
            throw new Error('Não foi possivel criar um cliente')
        }
    )

}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, { // Usando template string corretamente
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possivel remover um cliente')
        }

    })
}


const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`) // Corrigido para usar template literal
   .then(resposta => {  // Transforma a resposta em JS válido e retorna
        if(resposta.ok){
        return resposta.json()
        }
        throw new Error('Não foi possivel detalhar um cliente')
    })
}
// funcao de att os dados dos clientes
const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })

    })
    .then(resposta => {
        if(resposta.ok){
        return resposta.json()
        }
        throw new Error('Não foi possivel atualizar um cliente')
    })
}


export const clienteService = {
    listaClientes,
    criaClientes,
    removeCliente,
    detalhaCliente,
    atualizaCliente,

}

// ctrl C para o json e json-server --watch db.json volta
// o js é executado antes da web api, fznd um evento de loop: js>promisses> web api

