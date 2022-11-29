import { Routes, Route} from "react-router-dom";
import Login from './pages/login';
import Admin from './pages/admin';



function App(){
  return (
   <div className='App'>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
   </div>
  );
}

export default App
