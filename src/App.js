import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/menu/Navbar"
import "./scss/custom.scss"

function App() {
  return (
    <div className="app bg-gradient">
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
