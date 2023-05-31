
import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchImages from './api';
import Imagelist from './components/ImageList';

function App() {
  const[images, setImages] = useState([]);

  const handleSubmit = async (term) => {
   const result = await SearchImages(term);

   setImages(result);
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}/>
      <Imagelist images = {images} />
    </div>
  );
}

export default App;
