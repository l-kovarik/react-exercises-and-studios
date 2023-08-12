import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Table from './components/Table';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import HobbyLinks from './components/HobbyLinks.js';

function App() {
  return (
    <div className="App">
      <Hello />
      <Table />
      <ChoresList />
      <div className="similarComponents">
      <MovieList />
      <BookList />
      <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
