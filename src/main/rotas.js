import React from 'react'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'

// {} significa uma desentruração
import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/cadastro-usuario" component={CadastroUsuario}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas