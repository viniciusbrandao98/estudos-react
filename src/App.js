import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <h1>Olá react!</h1>
      <h2>Alterando o JSX</h2>
      <HelloWorld />
      <SayMyName nome="Vinícius"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome="Calanguinha"/>
      <Pessoa 
      nome="João"
      idade="22" 
      profissao="DEV"
      foto="https://img.magnific.com/fotos-gratis/bela-foto-de-um-gatinho-branco-de-pelo-curto-britanico_181624-57681.jpg?semt=ais_hybrid&w=740&q=80"
      />
    </div>
  );
}

export default App;
