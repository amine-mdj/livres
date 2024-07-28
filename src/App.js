import Navbar from './components/navbar.js'
import Caroussel from './components/caroussel.js'
import Products from './components/products.js'
import Footer from './components/footer.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Caroussel/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
