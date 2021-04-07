import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function AryanJainGlobe() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Aryan Jain",
    "gh-link": "https://github.com/coolAryan",
    "art-name": "Globe",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
      <div className={style.circle}></div>

      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default AryanJainGlobe;
