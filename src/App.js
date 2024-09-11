
import './App.css';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin/admin';
import User from './pages/user/user';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    < Router >
    <Provider store={store}>
    <div className="App">

   <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/user/*' element={<User/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
    </div>
    </Provider>
    </Router>
  );
}

export default App;
