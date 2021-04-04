// Components
import { Header } from "./components/Header/index";
import {
  SalilFigma,
  SalilReact,
  SalilPhotos,
  SalilDroplets,
  SalilAvicii,
  SalilEclips,
  SalilMicrosoft,
  JaagravGithubLogo,
  RainbowBlocks,
  RitikaAgrawalMoneyHeistMask,
  ShwetalBlossom,
  SubhashreeRotatingCube,
  HarshitFacebook,
  AntraCaptainShield,
  FalguniYouTube,
  HarshitInstagram,
  SheetalJainPepsi,
  TarunGitLogo,
  SharvariBirajdarLoader,
  AyushYadavAbstractArt,
  AvishakeAudiLogo,
} from "./art/index";

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
  <RitikaAgrawalMoneyHeistMask />,
  <ShwetalBlossom />,
  <SubhashreeRotatingCube />,
  <HarshitFacebook />,
  <AntraCaptainShield />,
  <FalguniYouTube />,
  <HarshitInstagram />,
  <SheetalJainPepsi />,
  <SharvariBirajdarLoader />,
  <TarunGitLogo />,
  <AyushYadavAbstractArt />,
  <AvishakeAudiLogo />,
];

function App() {
  return (
    <>
      <Header />
      <div className="grid-container full">
        <div className="grid-x">
          {componentArr.map((component, index) => {
            return (
              <div className="cell large-4 medium-6" key={index}>
                {component}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
