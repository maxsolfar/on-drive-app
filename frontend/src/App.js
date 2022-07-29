import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import RecoveryPassword from "./components/pages/RecoveryPassword/RecoveryPassword";
import NewPassword from "./components/pages/NewPassword/NewPassword";
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}  /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/recovery-password' element={<RecoveryPassword />} />
      </Routes>
    </div>
  );
}

export default App;
