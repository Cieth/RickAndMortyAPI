import "./App.scss";
import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <div className="title">
        <h1>Rick and Morty API </h1>
      </div>
      <div className="link">
        <Link to="/character">Accede a las tarjetas</Link>
      </div>
      <div className="cards-wrapper">
        <Routes>
          <Route path="character" element={<CardList />} />
          <Route path="/character/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
