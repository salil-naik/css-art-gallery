import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function MehakdeepCubePattern() {
  // Enter your name, github url and art-name below
  let data = {
    name: "MehakdeepCubePattern",
    "gh-link": "https://github.com/mehak6569",
    "art-name": "Cube Pattern",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}


      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default MehakdeepCubePattern;
