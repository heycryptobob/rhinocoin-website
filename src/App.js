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
// import Header from './Header';
// import Soon from './Soon';
import Warning from './Warning'

function App() {
  return (
    <div className="App">
      <Warning />
      {/* <Soon /> */}
      {/* <Header /> */}
      <Hero />
      <Features />
      <Tokenomics />
      <Distribution />
      <Roadmap />
      {/* <Fund />
      <Team />
      <Contract />
      <Buy /> */}
      <Footer />
    </div>
  );
}

export default App;
