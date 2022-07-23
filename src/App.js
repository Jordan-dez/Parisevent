import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EventDetail from "./Pages/EventDetail/EventDetail";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path="/" element={<Home/>}/>
        <Route path="/recherche" element={<Search/>}/>
        <Route path="/favoris" element={<Home/>}/>   
        <Route path="/event/:id" element={<EventDetail/>}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
