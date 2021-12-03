import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer categoryId="MLA1071" />
      <ItemListContainer categoryId="MLA1367" />
    </div>
  )
}

export default App

