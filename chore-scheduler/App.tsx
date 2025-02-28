import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoreList from './components/choreList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoreList />} />
      </Routes>
    </Router>
  );
};

export default App;