import Hero from "./Hero";
import NavBar from "./NavBar";
import SectionTwo from "./SectionTwo";
import Chart from "./Chart";
import SectionThree from "./SectionThree";
import SecondLast from "./SecondLast";
import Footer from "./Footer";
import MarqueeSection from "./MarqueeSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <Chart />
      <MarqueeSection />
      <SecondLast />
      <Footer />
    </div>
  );
}

export default App;
