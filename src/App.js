import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hearder from "./Components/Header/Hearder";
import EventDetail from "./Pages/EventDetail/EventDetail";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Footer from "./Components/Footer/Footer"
import Favorite from "./Pages/Favite/Favorite";
import NotFound from "./Pages/NotFound/NotFound404";
function App() {
  return (
    <>
      <Hearder />
      <main className="min-vh-100">
        <BrowserRouter>
          <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route path="/recherche" element={<Search />} />
            <Route path="/favoris" element={<Favorite/>} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
