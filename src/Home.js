import Features from './Features';
import Hero from './Hero';
import Tokenomics from './Tokenomics';
import Distribution from './Distribution';
import Roadmap from './Roadmap';
import Footer from './Footer';
import Warning from './Warning'

function Home() {
  return (
    <>
      <Warning />
      <Hero />
      <Features />
      <Tokenomics />
      <Distribution />
      <Roadmap />
      <Footer />
    </>
  );
}

export default Home;
