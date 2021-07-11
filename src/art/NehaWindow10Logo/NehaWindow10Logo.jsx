import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function ComponentName() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Neha Kumari",
    "gh-link": "https://github.com/NehaK745/",
    "art-name": "Window 10 Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}
      <div className={style.logo}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* your art blocks will come here */}
      <div>


      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default ComponentName;