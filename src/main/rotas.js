import React from 'react'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

// {} significa uma desentruturação
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
//import AuthServie from '../app/service/authService'
import { AuthConsumer } from '../main/provedorAutenticacao'


function RotaAutenticada( { component: Component, isUsuarioAutenticado, ...props}){
    return (
        <Route {...props} render={ (componentProps) => {
            if(isUsuarioAutenticado){
                return(
                    <Component {...componentProps}></Component>
                )
            }else{
                return(
                    <Redirect to={ {pathname : '/login', state : { from : componentProps.location}} }></Redirect>
                )
            }
        } }></Route>
    )
}

// O ponto de ? siginifica que o paramentro é opcional
function Rotas(props){
    return (
        <HashRouter>
            <Switch>
                <Route path="/cadastro-usuario" component={CadastroUsuario}></Route>
                <Route path="/login" component={Login}></Route>
                
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home}></RotaAutenticada>
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={ConsultaLancamentos}></RotaAutenticada>
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-lancamentos/:id?" component={CadastroLancamentos}></RotaAutenticada>
            </Switch>
        </HashRouter>
    )
}

export default () => (
    <AuthConsumer>
        { (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado}></Rotas>)}
    </AuthConsumer>
)