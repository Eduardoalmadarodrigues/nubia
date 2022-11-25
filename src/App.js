import { UserContextWrapper } from './Contexts/UserContext';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import Loja from './Pages/Loja'

const router = createBrowserRouter([{path: '/', element: <Loja/>},{path: 'login', element:<Login/>}])

function App() {
  return (
    <UserContextWrapper>
      <RouterProvider router={router}/>
    </UserContextWrapper>
  );
}

export default App;