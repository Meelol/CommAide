import React from 'react';
import Welcome from './components/Welcome';
import CategoriesList from './components/CategoriesList';
import Footer from './components/Footer';
import Aide from './components/Aide';


function App() {
  return (
    <React.Fragment>
      <Welcome></Welcome>
      <Aide></Aide>
    </React.Fragment>
  )
}

export default App
