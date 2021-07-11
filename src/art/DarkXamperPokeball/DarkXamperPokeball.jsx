import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same.

function DarkXamperPokeball() {
  // Enter your name, github url and art-name below
  let data = {
    name: "DarkXamper",
    "gh-link": "https://github.com/DarkXamper",
    "art-name": "Pokeball"
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.c1}>
        <div className={style.rect1}></div>
        <div className={style.Scircle}>
          <div className={style.SScircle}></div>
        </div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default DarkXamperPokeball;
