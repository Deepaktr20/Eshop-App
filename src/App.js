import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function App(){
  return(
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/checkout" Component={Checkout}></Route>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
    </div>
  )
}
export default App;