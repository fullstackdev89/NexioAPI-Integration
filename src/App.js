import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import AdminDashboard from './components/Dashboard';
import CreateCard from './components/card/Create';
import GetCards from './components/card/Get';
import CreateTransaction from './components/transaction/Create';
import GetTransactions from './components/transaction/Get';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />

          <Route path="/card/create" element={<CreateCard />} />
          <Route path="/card/get" element={<GetCards />} />

          <Route path="/transaction/get" element={<GetTransactions />} />
          <Route path="/transaction/create" element={<CreateTransaction />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
