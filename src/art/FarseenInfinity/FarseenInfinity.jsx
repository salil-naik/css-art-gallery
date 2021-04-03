import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same.

function FarseenInfinity() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Mohammad Farseen Manekhan",
    "gh-link": "farseenmanekhan1232",
    "art-name": "Infinity",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}

      <div className={style.infinitymain}>
        <div class={style.infinity - 1}></div>
        <div class={style.infinity - 2}></div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default ComponentName;
