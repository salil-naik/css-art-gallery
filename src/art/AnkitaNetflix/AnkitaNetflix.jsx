import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function AnkitaNetflix() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Ankita",
    "gh-link": "https://github.com/ak566g",
    "art-name": "Netflix logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.logo}>
        <div class={style.netflix}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h3 className={style.heading}>Netflix</h3>
  </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default AnkitaNetflix;
