import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer categoryId="MLA1071" />
      <ItemDetailContainer />
    </div>
  )
}

export default App

