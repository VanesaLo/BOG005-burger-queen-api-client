import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/admin";
import AdminTable from "./components/usersTable";
import { Products } from "./pages/products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
