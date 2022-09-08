import './App.scss';
import CardDetails from './components/CardDetails';
import CardList from './components/CardList';

function App() {
  return (
    <div className="main-container" >
      <div className='title'>
        <h1>Rick and Morty API </h1>
      </div>
      <div className="cards-wrapper">
        <CardList />
        <CardDetails />
      </div>
    </div>
  );
}

export default App;
