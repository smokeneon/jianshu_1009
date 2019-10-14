import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/';
import store from './store';

function App() {
  return (
   <div>
     <Provider store = {store}>
      <Header />
     </Provider>
   </div>
  );
}

export default App;
