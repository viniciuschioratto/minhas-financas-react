import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/localstorageService'
import { mensagemErro } from '../components/toastr'
import { AuthContext } from '../main/provedorAutenticacao'

class Login extends React.Component{

    state = {
        email:'',
        senha:''
    }
    constructor(){
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
            //O localStorage isso guardar o usuario somente no front-end, se fizer o armazenamento em Cookie é possível recuperar esse usuario na API
            //localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
            //LocalStorageService.adicionarItem('_usuario_logado', response.data)
            this.context.iniciarSessao(response.data)
            this.props.history.push('/home')
        }).catch( erro => {
            mensagemErro(erro.response.data)
            //this.setState({msgErro: erro.response.data})
        })
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuario')
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                    <div className="bs=docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail">
                                                <input type="email" 
                                                    value={this.state.email}
                                                    onChange={e => this.setState({email: e.target.value})}
                                                    className="form-control" 
                                                    id="exampleInputEmail" 
                                                    aria-describedby="emailHelp" 
                                                    placeholder="Digite seu Email"></input>
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password" 
                                                value={this.state.senha}
                                                onChange={e => this.setState({senha: e.target.value})}
                                                className="form-control" 
                                                id="exampleInputPassword1" 
                                                placeholder="Password"></input>
                                            </FormGroup>
                                            <button onClick={() => this.entrar()} className="btn btn-success"><i className="pi pi-sign-in"></i> Entrar</button>
                                            <button onClick={() => this.prepareCadastrar()} className="btn btn-danger"><i className="pi pi-plus"></i> Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

Login.contextType = AuthContext

export default withRouter( Login )