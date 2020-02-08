import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService'
import { mensagemErro, mensagemSucesso } from '../components/toastr'


class CadastroUsuario extends React.Component{
    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }
    validar(){
        const msg = []

        if(!this.state.nome){
            msg.push('O campo Nome é obrigatorio.')
        }

        if(!this.state.email){
            msg.push('O campo Email é obrigatorio.')
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msg.push('Informe um Email válido')
        }

        if(!this.state.senha || !this.state.senhaRepeticao){
            msg.push('Digite a senha 2x.')
        } else if (this.state.senha !== this.state.senhaRepeticao){
            msg.push('As senhas não batem.')
        }

        return msg;
    }
    cadastrar = () => {

        const msgs = this.validar()

        if(msgs && msgs.length > 0){
            msgs.forEach( (msg, index) => {
                mensagemErro(msg)
            })
            return false
        }
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }
        this.service.salvar(usuario)
        .then( response => {
            mensagemSucesso('Usuário cadastrado com sucesso! Faça p login para acessar o sistema.')
            this.props.history.push('/login')
        }).catch( error => {
            mensagemErro(error.response.data)
        })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
            //Todo return deve ter somente um nivel
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({nome: e.target.value})}
                                ></input>
                            </FormGroup>
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({email: e.target.value})}
                                ></input>
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({senha: e.target.value})}
                                ></input>
                            </FormGroup>
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password"
                                    id="inputRepitaSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})}
                                ></input>
                            </FormGroup>
                            <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                            <button onClick={() => this.cancelar()} type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter( CadastroUsuario )