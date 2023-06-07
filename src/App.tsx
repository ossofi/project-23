import Header from "./components/Header/Header";
import { Route,BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import './index.css';

function App() {
  return <>
    <BrowserRouter>
      <Header/>
      <div className='app-content' >
        <NavBar/>
        <Main/>
      </div>
    </BrowserRouter>
  </>;
}

export default App;
