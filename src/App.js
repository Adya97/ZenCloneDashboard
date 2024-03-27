import Home from "./pages/home/home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Single from "./pages/single/single";
import New from "./pages/new/newpage";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>

          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
