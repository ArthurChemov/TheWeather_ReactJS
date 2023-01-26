import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import Navbar from "./components/menu/Navbar"
import "./scss/custom.scss"

function App() {
  const[mode, isDark] = useState(true);

  return (
    <div className={`app ${mode ? 'bg-gradient':'bg-gradient'}`} style={mode ? { backgroundColor: '#212529'  } : {backgroundColor: '#ced4da'}}>
      <BrowserRouter>
        <Navbar mode = {mode} isDark = {isDark}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
