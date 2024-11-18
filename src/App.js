import logo from './logo.svg';
import './App.css';
import Authentication from './components/Authentication';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes><Route path="/" element={<Authentication/>} /></Routes>
    </div>
  );
}

export default App;
