import './App.scss';
import AppHeader from './components/header';
import Basket from './components/basket';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Product />
      <Basket />
    </div>
  );
}

export default App;
