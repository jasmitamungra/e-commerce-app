import React from 'react';
import { Provider } from 'react-redux';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>E-commerce Website</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
