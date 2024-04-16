import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./pages/index";
import Register from "./pages/register";
import Product from "./pages/product";
import Login from "./pages/login";
function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
      <Route path="/" element={ <Index/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/product" element={ <Product/> }/>
      <Route path="/login" element={ <Login/> }/>
    

      </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
