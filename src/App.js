import style from "./app.module.css";

// Components
import {Header} from "./components/Header/index";

// Art components
import SalilFigma from "./art/SalilFigma/SalilFigma.jsx";
import SalilReact from "./art/SalilReact/SalilReact.jsx";
import SalilPhotos from "./art/SalilPhotos/SalilPhotos.jsx";
import SalilDroplets from "./art/SalilDroplets/SalilDroplets.jsx";
import SalilAvicii from "./art/SalilAvicii/SalilAvicii.jsx";
import SalilEclips from "./art/SalilEclips/SalilEclips.jsx";
import SalilMicrosoft from "./art/SalilMicrosoft/SalilMicrosoft.jsx";

function App() {
  return (
    <>
    <Header />
    <div className={style.gallery}>
        <SalilFigma />
        <SalilReact />
        <SalilPhotos />
        <SalilDroplets />
        <SalilAvicii />
        <SalilEclips />
        <SalilMicrosoft />
    </div>
    </>
  );
}

export default App;
