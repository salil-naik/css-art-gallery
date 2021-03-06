import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SalilPhotos() {
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "Google Photos logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        <div className={style.petal}></div>
        <div className={`${style.petal} ${style.mirror}`}></div>
      </div>

      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default SalilPhotos;
