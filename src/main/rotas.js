import React from 'react'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

// {} significa uma desentruturação
import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/cadastro-usuario" component={CadastroUsuario}></Route>
                <Route path="/consulta-lancamentos" component={ConsultaLancamentos}></Route>
                <Route path="/cadastro-lancamentos/:id" component={CadastroLancamentos}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas