import './styles/App.css';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Section1 from './components/section-1/Section1';

function App() {
  return (
    <>
    <Menu/>
    <Hero/>
    <Section1 id="facts"/>
    <Section1 id="figures"/>
    </>
  );
}

export default App;
