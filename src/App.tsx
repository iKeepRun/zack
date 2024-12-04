import "normalize.css";
import "./styles/border.css";
import "./styles/base.css";

import {BrowserRouter,Routes,Route} from  "react-router-dom";

import Guide from "./containers/Guide";
import Login from "./containers/Login";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Guide />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
