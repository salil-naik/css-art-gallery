import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SalilEclips() {
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "Eclips",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.circle}></div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default SalilEclips;
