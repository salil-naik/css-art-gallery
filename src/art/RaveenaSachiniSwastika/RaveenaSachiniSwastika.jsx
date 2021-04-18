import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function RaveenaSachiniSwastika() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Raveena Sachini",
    "gh-link": "https://github.com/raveena69",
    "art-name": "Swastika",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
          <div className={style.outBox}>
            <div className={style.firstRow}></div>
            <div className={style.firstRowLong}></div>
            <div className={style.secondRow}></div>
            <div className={style.thirdRow}></div>
            <div className={style.secondRowLong}></div>
            <div className={style.fourthRow}></div>
          </div>
      </div>

      {/* do not edit the line below */}  
      <Credit data={data} />
    </div>
  );
}

export default RaveenaSachiniSwastika;
