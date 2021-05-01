import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function RaveenaSachiniPowerSymbol() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Raveena Sachini",
    "gh-link": "https://github.com/raveena69",
    "art-name": "Power Symbol",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.outerBox}>
          <div className={style.outLineVertical}>
            <div className={style.insideLineVertical}></div>
          </div>
          <div className={style.outerCircle}></div>
        </div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default RaveenaSachiniPowerSymbol;
