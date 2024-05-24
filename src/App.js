import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import FindSection from "./components/findSection/FindSection";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <FindSection/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
