import { useEffect } from "react";
import publicIp from "public-ip";

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
  AryanJainGlobe,
  HarshitXiaomi,
  PankajChromeLogo,
  ShreyaLinkedIn,
  ShridharAarogyaSetu,
  VidiptaSharmaAdobe,
  WebDevGoaWDGLogo,
  HarshitClock,
  HarshitLG
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
  <AntraCaptainShield />,
  <HarshitFacebook />,
  <FalguniYouTube />,
  <WebDevGoaWDGLogo />,
  <TarunGitLogo />,
  <HarshitInstagram />,
  <AyushYadavAbstractArt />,
  <AryanJainGlobe />,
  <HarshitXiaomi />,
  <PankajChromeLogo />,
  <ShreyaLinkedIn />,
  <ShridharAarogyaSetu />,
  <VidiptaSharmaAdobe />,
  <SheetalJainPepsi />,
  <SharvariBirajdarLoader />,
  <AvishakeAudiLogo />,
  <HarshitClock />,
  <HarshitLG />
];

function App() {
  useEffect(() => {
    async function getIP() {
      window.ip_address = await publicIp.v4();
      window.ip_address = window.ip_address.replace(
        /[&/\\#,+()$~%.'":*?<>{}]/g,
        ""
      );
    }
    getIP();
  }, []);
  return (
    <>
      <Header />
      <div className="grid-container full">
        <div className="grid-x">
          {componentArr.map((component, index) => {
            return (
              <div className="cell large-4 medium-6" key={index} index={index}>
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
