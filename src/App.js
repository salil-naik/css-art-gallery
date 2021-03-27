import style from "./app.module.css";

// Components
import SalilFigma from "./art/SalilFigma/SalilFigma.jsx";
import SalilReact from "./art/SalilReact/SalilReact.jsx";
import SalilPhotos from "./art/SalilPhotos/SalilPhotos.jsx";
import SalilDroplets from "./art/SalilDroplets/SalilDroplets.jsx";
import SalilAvicii from "./art/SalilAvicii/SalilAvicii.jsx";

function App() {
  return (
    <div className={style.gallery}>
        <SalilFigma />
        <SalilReact />
        <SalilPhotos />
        <SalilDroplets />
        <SalilAvicii />
    </div>
  );
}

export default App;
