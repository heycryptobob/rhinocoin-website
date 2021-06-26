import './App.scss';
import Features from './Features';
import Hero from './Hero';
import Tokenomics from './Tokenomics';
import Distribution from './Distribution';
import Roadmap from './Roadmap';
// import Fund from './Fund';
// import Contract from './Contract';
// import Buy from './Buy';
// import Team from './Team';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Tokenomics />
      <Distribution />
      <Roadmap />
      {/* <Fund /> */}
      {/* <Team /> */}
      {/* <Contract /> */}
      {/* <Buy /> */}
      <Footer />
    </div>
  );
}

export default App;
