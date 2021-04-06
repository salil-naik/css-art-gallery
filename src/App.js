// Components
import { Header } from "./components/Header/index";

// Art components
import SalilFigma from "./art/SalilFigma/SalilFigma.jsx";
import SalilReact from "./art/SalilReact/SalilReact.jsx";
import SalilPhotos from "./art/SalilPhotos/SalilPhotos.jsx";
import SalilDroplets from "./art/SalilDroplets/SalilDroplets.jsx";
import SalilAvicii from "./art/SalilAvicii/SalilAvicii.jsx";
import SalilEclips from "./art/SalilEclips/SalilEclips.jsx";
import SalilMicrosoft from "./art/SalilMicrosoft/SalilMicrosoft.jsx";
import JaagravGithubLogo from "./art/JaagravGithubLogo/JaagravGithubLogo.jsx";
import RainbowBlocks from "./art/RainbowBlocks/RainbowBlocks.jsx";

// An array of Art Components
let componentArr = [
  <SalilFigma />,
  <SalilReact />,
  <SalilPhotos />,
  <SalilDroplets />,
  <SalilAvicii />,
  <SalilEclips />,
  <SalilMicrosoft />,
  <JaagravGithubLogo />,
  <RainbowBlocks />,
  
];

function App() {
  return (
    <>
      <Header />
      <div className="grid-container full">
        <div className="grid-x">
          {
            componentArr.map((component, index)=>{
              return(
                <div className="cell large-4 medium-6" key={index}>
                  {component}
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
