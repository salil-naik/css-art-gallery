import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function SreehariTarget() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Sreehari A",
    "gh-link": "https://github.com/sreeharianilkumar1",
    "art-name": "Target",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.outercircle}>
          <div className={style.redinnercircle}>
            <div className={style.innercircle}>

            </div>
          </div>
        </div>
        <div className={style.textname}>
          <h2>TARGET</h2>
        </div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default SreehariTarget;
