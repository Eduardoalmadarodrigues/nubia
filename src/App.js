import logo from './logo.svg';
import './App.css';
import UserContext from './Contexts/UserContext';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , Route, RouterProvider} from 'react-router-dom';
import Login from './Pages/Login';
import Loja from './Pages/Loja'

const router = createBrowserRouter([{path: '/', element: <Loja/>},{path: 'login', element:<Login/>}])

function App() {
  return (
    <UserContext>
      <RouterProvider router={router}/>
    </UserContext>
  );
}

export default App;