import React from 'react'
import NavbarItem from './navbarItem'
import AuthService from '../app/service/authService'
import { AuthConsumer } from '../main/provedorAutenticacao'

//const deslogar = () => {
//    AuthService.removerUsuarioAutenticado()
//}

//const isUsuariAutenticado = () => {
//    return AuthService.isUsuarioAutenticado()
//}

function Navbar(props){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="#/home" className="navbar-brand">Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem render={props.isUsuarioAutenticado} href="#/home" label="Home"></NavbarItem>
                        <NavbarItem render={props.isUsuarioAutenticado} href="#/cadastro-usuario" label="Usuários"></NavbarItem>
                        <NavbarItem render={props.isUsuarioAutenticado} href="#/consulta-lancamentos" label="Lançamentos"></NavbarItem>
                        <NavbarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="#/login" label="Sair"></NavbarItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default () => (
    <AuthConsumer>
        { (context) => (<Navbar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao}></Navbar>)}
    </AuthConsumer>
)