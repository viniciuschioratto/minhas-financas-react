import React from 'react';
//Inclusão de um componente
//import Login from '../views/login'
//import CadastroUsuario from '../views/cadastroUsuario';

import Rotas from './rotas'
import Navbar from '../components/navbar'

import 'toastr/build/toastr.min.js'

//Inclusão do CSS
import '../custom.css'

//Inclusão do CSS da biblioteca do Bootswatch
import 'bootswatch/dist/flatly/bootstrap.css'

//Inclusão CSS do Toast
import 'toastr/build/toastr.css'

class App extends React.Component{
  render(){
    return(
      <>
        <Navbar></Navbar>
        <div className="container">
          <Rotas></Rotas>
        </div>
      </>
    )
  }
}

export default App;
