import Header from "./Components/Header";
import TopImage from "./Components/TopImage";
import TopOne from "./Components/TopOne";
import MidOne from "./Components/MidOne";

function App() {
  return (
    <div className=" ">
      <div className="absolute overflow-hidden  md:left-1/2 md:transform md:-translate-x-1/2  w-screen md:max-w-[1280px] -z-30 bg-[#F1F6FB] h-[200vh]">
        <div className=" top-0 w-scrren md:max-w-[1280px] h-[50rem] bg-[#40a2d8] ">
          <div>
            <Header />
            <TopOne />
            <TopImage />
          </div>
          <div>
            <MidOne />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
