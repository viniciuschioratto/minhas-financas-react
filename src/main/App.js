import React from 'react';
//Inclusão de um componente
//import Login from '../views/login'
//import CadastroUsuario from '../views/cadastroUsuario';
import ProvedorAutenticacao from './provedorAutenticacao'

import Rotas from './rotas'
import Navbar from '../components/navbar'

import 'toastr/build/toastr.min.js'

//Inclusão do CSS
import '../custom.css'

//Inclusão do CSS da biblioteca do Bootswatch
import 'bootswatch/dist/flatly/bootstrap.css'

//Inclusão CSS do Toast
import 'toastr/build/toastr.css'

//Inclusão CSS do PrimeReact
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


class App extends React.Component{
  render(){
    return(
      <>
        <ProvedorAutenticacao>
          <Navbar></Navbar>
          <div className="container">
            <Rotas></Rotas>
          </div>
        </ProvedorAutenticacao>
      </>
    )
  }
}

export default App;
