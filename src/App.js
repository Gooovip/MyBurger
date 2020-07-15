import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBulider from './containers/BurgerBulider/BurgerBulider';

function App() {
  return (
    <div className="App">
     <Layout>
       <BurgerBulider />
     </Layout>
    </div>
  );
}

export default App;
