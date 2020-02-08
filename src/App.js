import React from 'react';
//Inclusão de um componente
import Login from './views/login'

//Inclusão do CSS
import './custom.css'

//Inclusão do CSS da biblioteca do Bootswatch
import 'bootswatch/dist/flatly/bootstrap.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <Login></Login>
      </div>
    )
  }
}

export default App;
