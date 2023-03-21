
import './App.css';
import { Button } from './button';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Decrement } from './Decrement';
import { Ajout } from './Input';
import { Formulaire } from './Formulaire';
function App() {

 


  return (
    <Provider store={store}>
      <div className="App">
        <Button/>
        <Decrement/>
        <Ajout/>
        <Formulaire/>
      </div>
    </Provider>
  );
}

export default App;
