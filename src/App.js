import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

function sum(a, b) {
  return a + b 
}
const nome = "Vinícius"
const idade = 27
  return (
    <div className="App">
      <h1>Olá react!</h1>
      <h2>Alterando o JSX</h2>
      <p>Olá, {nome}, você tem {idade} anos e a soma dos números é {sum(1,5)} anos</p>
      <HelloWorld/>
    </div>
  );
}

export default App;
