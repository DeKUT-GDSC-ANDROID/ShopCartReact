
import './App.css';
import Navbar from './Navbar'
import Categories from './Categories/Categories'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Deals from './deals/deals';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
        <Header />
      <HeroSection />
      <Categories />
      <Deals />
      <Footer/>
     {/* <Navbar/> */}
     {/* <Categories/> */}
    </div>
  );
}

export default App;

