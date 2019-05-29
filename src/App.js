import React from 'react';

// Stateless
class MostraDados extends React.Component {
  state = {
    logado: true,
  };
  componentDidMount() {
    console.log('entrei');
  }

  componentWillUnmount() {
    console.log('sai');
  }

  componentWillReceiveProps() {
    console.log('recebi um atualizacao');
  }

  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          color: 'green',
        }}
      >
        {children}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    nome: 'Welington',
    sobrenome: 'Silva',
    exibindo: true,
  };

  componentDidMount() {
    this.alterarDados();
  }

  alterarDados = () => {
    setTimeout(() => {
      this.setState({
        nome: 'Caio',
        sobrenome: 'Henrique',
      });
    }, 3000);
  };

  componentWillUnmount() {}

  escondeDados = () => {
    this.setState({
      exibindo: false,
    });
  };

  render() {
    const { nome, sobrenome, exibindo } = this.state;
    return (
      <div>
        {exibindo === true ? (
          <>
            <MostraDados>{nome}</MostraDados>
            <MostraDados>{sobrenome}</MostraDados>
          </>
        ) : null}

        <button onClick={this.escondeDados}>Esconde Dados</button>
      </div>
    );
  }
}

export default App;
