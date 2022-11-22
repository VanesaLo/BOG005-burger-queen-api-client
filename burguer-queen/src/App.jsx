
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/login.jsx';
import Admin from './components/admin.jsx';



function App(){
  return (
   <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App
