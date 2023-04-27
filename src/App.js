import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import { router } from './Routes/Routes';
function App() {
  return (
    <div className="">
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
