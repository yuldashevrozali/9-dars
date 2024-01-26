import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root';
import { ConfigProvider } from 'antd';
import Teachers from './pages/teachers';
import Classes from './pages/classes';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path: 'teachers',
        element: <Teachers></Teachers>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
    ]
  }
])

function App() {

  return (
    <>
    <ConfigProvider theme={{
      token:{
        colorPrimary:'#bc8e5c',
        fontSize:20
      }
    }}>
    <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
    
    </>
  );
}

export default App;
 