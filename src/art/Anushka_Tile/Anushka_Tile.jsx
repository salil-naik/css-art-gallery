import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function Anushka_Tile() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Anushka",
    "gh-link": "https://github.com/anushka00",
    "art-name": "tiles",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
<div className={style.blocks}></div>

      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default Anushka_Tile;
