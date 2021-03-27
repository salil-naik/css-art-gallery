import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SalilFigma() {
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "Figma logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.stackV}>
        <div className={style.semiLeft}></div>
        <div className={style.stackH}>
          <div className={style.semiLeftSecond}></div>
          <div className={style.circle}></div>
        </div>
        <div className={style.stackH}>
          <div className={style.green}></div>
        </div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default SalilFigma;
