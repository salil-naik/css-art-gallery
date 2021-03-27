import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SalilAvicii() {
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "Avicii logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.artContainer}>
        <div className={style.side}>
          <div className={style.triangle}></div>
        </div>

        <div className={style.side}>
          <div className={`${style.triangle} ${style.mirror}`}></div>
        </div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default SalilAvicii;
