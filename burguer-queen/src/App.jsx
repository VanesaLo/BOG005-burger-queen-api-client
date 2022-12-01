import { Routes, Route} from "react-router-dom";
import Login from './pages/login';
import Admin from './pages/admin';
import { EditUsers } from "./components/editUsers";
import AdminTable from "./components/usersTable";
import TableProducts from "./components/productTable";



function App(){
  return (
   <div className='App'>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/admin/" element={<Admin/>}>
      <Route path="Users" element={<AdminTable/>}/>
      <Route path="products" element={<TableProducts/>}/>
      </Route>
    </Routes>
   </div>
  );
}

export default App;
