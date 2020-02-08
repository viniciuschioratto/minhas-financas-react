import React from 'react'
import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/localstorageService'

class Home extends React.Component{
    state = {
        saldo : 0
    }

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }
    //Componente de ciclo de vida do React, ele é executado antes da renderização 
    componentDidMount(){
        //const usuarioLogadoString = localStorage.getItem('_usuario_logado')
        const usuarioLogadoObject = LocalStorageService.obterItem('_usuario_logado')
        //Utilizar `` para inserir o valor de algum objeto
        //axios.get(`http://localhost:8080/api/usuarios/${usuarioLogadoObject.id}/saldo`)
        this.usuarioService.obterSaldoPorUsuario(usuarioLogadoObject.id)    
        .then( response =>{
                this.setState({saldo : response.data})
            }).catch( error =>{
                console.error(error.response)
            });
    }
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4"/>
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" 
                href="#/cadastro-usuario" 
                role="button"><i className="fa fa-users"></i>  
                Cadastrar Usuário
                </a>
                <a className="btn btn-danger btn-lg" 
                href="https://bootswatch.com/flatly/#"
                 role="button"><i className="fa fa-users"></i>  
                 Cadastrar Lançamento
                 </a>
                </p>
            </div>
        )
    }
}


export default Home