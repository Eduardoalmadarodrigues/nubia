import { UserContextWrapper } from './Contexts/UserContext';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import Loja from './Pages/Loja';
import {Carrinho} from './Pages/Carrinho/Carrinho';
import Product from './Pages/Product'

const router = createBrowserRouter([{path: '/', element: <Loja/>},{path: 'login', element:<Login/>},{path:'/carrinho',element:<Carrinho/>},{path:'product', element:<Product/>}])

function App() {
  return (
    <UserContextWrapper>
      <RouterProvider router={router}/>
    </UserContextWrapper>
  );
}

export default App;