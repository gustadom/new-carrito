import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Views/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './Views/Category';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route exact path='/Category/:id' element={<Category />} ></Route>
          <Route exact path='/item/:id' element={<ItemDetailContainer />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

