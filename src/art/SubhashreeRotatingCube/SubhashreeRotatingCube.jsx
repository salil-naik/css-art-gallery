import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function ComponentName() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Subhashree Dash",
    "gh-link": "https://github.com/micky2001",
    "art-name": "Rotating Cube",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.body}>
      <div className={style.cube}>
        <div className={`${style.face} ${style.front}`}></div>
        <div className={`${style.face} ${style.back}`}></div>
        <div className={`${style.face} ${style.right}`}></div>
        <div className={`${style.face} ${style.left}`}></div>
        <div className={`${style.face} ${style.top}`}></div>
        <div className={`${style.face} ${style.bottom}`}></div>
      </div>
      </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default ComponentName;
