import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./component/Login";
import Chats from "./component/Chats";
import './index.css'
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div style = {{fontFamily :'Avenir'}}>
     <BrowserRouter>
     <AuthProvider>

     <Routes>
      <Route path="/chats" element={<Chats/>}/>
      <Route path="/" element={<Login/>} />
     </Routes>
     </AuthProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
