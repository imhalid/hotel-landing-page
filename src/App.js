import Header from "./Components/Header";
import TopImage from "./Components/TopImage";
import TopOne from "./Components/TopOne";
import MidOne from "./Components/MidOne";
import MidTwo from "./Components/MidTwo";
import MidThree from "./Components/MidThree";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="scrollbar-thin scrollbar-thumb-custom  overflow-y-scroll absolute overflow-x-hidden   md:left-1/2 md:transform md:-translate-x-1/2  w-screen md:max-w-[1280px] -z-30 bg-[#F1F6FB] h-full">
      <div className="top-0 w-scrren md:max-w-[1280px] h-[50rem] bg-[#40a2d8] ">
        <div>
          <Header />
          <TopOne />
          <TopImage />
          <MidOne />
          <MidTwo />
          <MidThree />
          <Subscribe />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
