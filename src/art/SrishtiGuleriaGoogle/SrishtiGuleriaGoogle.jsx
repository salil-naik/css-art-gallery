import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function SrishtiGuleriaGoogle() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Srishti Guleria",
    "gh-link": "https://github.com/sg7801",
    "art-name": "Google Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.logo}>
      </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default SrishtiGuleriaGoogle;
