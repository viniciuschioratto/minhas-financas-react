import React from 'react';
//Inclusão de um componente
//import Login from '../views/login'
//import CadastroUsuario from '../views/cadastroUsuario';

import Rotas from './rotas'

//Inclusão do CSS
import '../custom.css'

//Inclusão do CSS da biblioteca do Bootswatch
import 'bootswatch/dist/flatly/bootstrap.css'


class App extends React.Component{
  render(){
    return(
      <div>
        <Rotas></Rotas>
      </div>
    )
  }
}

export default App;
