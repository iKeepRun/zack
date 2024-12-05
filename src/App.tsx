import "normalize.css";
import "./styles/border.css";
import "./styles/base.css";

import {BrowserRouter,Routes,Route} from  "react-router-dom";

import Guide from "./containers/Guide";
import Login from "./containers/Login";
import Test from "./containers/Test";
import Register from "./containers/Register";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Guide />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
