import style from "./style.module.scss";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo

function RainbowBlocks() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "Rainbow Blocks",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.drop}></div>        
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default RainbowBlocks;
