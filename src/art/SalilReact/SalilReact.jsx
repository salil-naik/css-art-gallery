import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SalilReact() {
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "React logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        <div className={style.ring}></div>
        <div className={`${style.ring} ${style.two}`}></div>
        <div className={`${style.ring} ${style.three}`}></div>
        <div className={style.circle}></div>
      </div>

      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default SalilReact;
