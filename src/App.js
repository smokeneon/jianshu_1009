import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header/';
import Home from './pages/home';
import Detail from './pages/detail'
import store from './store';

function App() {
  return (
   <div>
     <Provider store = {store}>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component = {Home}></Route>
        <Route path='/detail' exact component = {Detail}></Route>
      </BrowserRouter>
     </Provider>
   </div>
  );
}

export default App;
