import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  )
}

export default App

