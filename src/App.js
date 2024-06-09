import logo from './logo.svg';
import './App.css';
import AddFisat from './components/AddFisat';
import SearchFisat from './components/SearchFisat';
import DeleteFisat from './components/DeleteFisat';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddFisat/>}/>
        <Route path="/search" element={<SearchFisat/>}/>
        <Route path="/delete" element={<DeleteFisat/>}/>
        <Route path="/view" element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
