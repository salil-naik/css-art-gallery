import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function RaveenaSachiniPeaceSymbol() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Raveena Sachini",
    "gh-link": "https://github.com/raveena69",
    "art-name": "Symbol of Peace",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.outCircle}>
          <div className={style.innerCircle}>
            <div className={style.innerLongVertical}></div>
            <div className={style.innerShortLeft}></div>
            <div className={style.innerShortRight}></div>
          </div>
        </div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default RaveenaSachiniPeaceSymbol;
