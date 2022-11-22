import { Routes, Route} from "react-router-dom";
import Login from './components/login.jsx';
import Admin from './components/admin.jsx';



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
