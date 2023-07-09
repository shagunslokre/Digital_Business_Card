import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <div className="card__container">
      <div class="digital__card">
        <Info />
        <div className='card__content'>
          <About />
          <Interests />
        </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
