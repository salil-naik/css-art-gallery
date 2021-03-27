import style from "./app.module.css";

// Components
import SalilFigma from "./art/SalilFigma/SalilFigma.jsx";
import SalilReact from "./art/SalilReact/SalilReact.jsx";

function App() {
  return (
    <div className={style.gallery}>
        <SalilFigma />
        <SalilReact />
    </div>
  );
}

export default App;
