import React from 'react';
import Welcome from './components/Welcome';
import CategoriesList from './components/CategoriesList';
import Footer from './components/Footer';
import Aide from './components/Aide';


function App() {
  return (
    <React.Fragment>
    <Welcome></Welcome>
    <main className="flex gap-4 p-1.5">
      <React.Fragment>
        <CategoriesList></CategoriesList>
      </React.Fragment>
      <React.Fragment>
        <Aide></Aide>
      </React.Fragment>
    </main>
      <footer>
        <Footer></Footer>
      </footer>
    </React.Fragment>
  )
}

export default App
