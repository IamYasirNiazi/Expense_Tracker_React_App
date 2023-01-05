import store from '../src/Redux_Store/Store'
import { Provider } from 'react-redux';
import Home from './Pages/Home';


function App() {
  return (
    <>
      <Provider store={store}>

        <Home />
      
      </Provider>
    </>
  );
}

export default App;
