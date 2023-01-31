
import './App.css';
import Login from './component/login/Login';
import Home from './component/home/Home';
import { useSelector } from 'react-redux';

function App() {
  const loginState = useSelector(state=>state.login.loginState)
  return (
    <>
    {loginState && <Home/>}
    {!loginState && <Login/>}
    </>
  );
}

export default App;
