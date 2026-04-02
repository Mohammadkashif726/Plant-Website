import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import AboutUs from './components/AboutUs/AboutUs';
import Choice from './components/Choice/Choice';
import Review from './Review/Review';
import Links from './components/Links/Links';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <AboutUs />
      <Choice />
      <Review />
      <Links />
    </div>
  );
}

export default App;
