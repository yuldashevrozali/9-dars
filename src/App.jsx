import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root';
import { ConfigProvider } from 'antd';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>
  }
])

function App() {

  return (
    <>
    <ConfigProvider theme={{
      token:{
        colorPrimary:'#bc8e5c',
      }
    }}>
    <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
    
    </>
  );
}

export default App;
 