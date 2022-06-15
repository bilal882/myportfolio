import { useState } from 'react';
import Index from './Components/Form/Index';
import Navabr from './Components/Navbar';
import './Components/Style.css'
function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      {
        flag ? <Navabr /> : <Index />
      }
    </div>
  );
}

export default App;
