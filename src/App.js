import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Error from './pages/error/Error';
import { userInputs } from './formSource';
import { productInputs } from './formSource';
import "./style/dark.scss"
import {
  DarkModeContext,
} from "./context/DarkModeContext";
import { useContext } from 'react';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "App dark" : "App"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="/products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
