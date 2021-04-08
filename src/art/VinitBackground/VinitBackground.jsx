import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function VinitBackground() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Vinit",
    "gh-link": "https://github.com/vinc3nati",
    "art-name": "CSS Background",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div id = {style.stars}>
      </div>
      <div id = {style.stars2}>
      </div>
      <div id = {style.stars3}>
      </div>
      <div id={style.title}>
      <span>
        CSS ART
      </span>
      <br />
    </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default VinitBackground;
