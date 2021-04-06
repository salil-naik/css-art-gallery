import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function WebDevGoaWDGLogo() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Web Dev Goa",
    "gh-link": "https://github.com/WebDevGoa",
    "art-name": "WDG Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.logo}>

        <div className={style.brandingLogo}>
          <div className={`${style.line} ${style.lineEv}`}>
            <div className={style.dit}></div>
            <div className={style.dit}></div>
          </div>

          <div className={`${style.line} ${style.lineOd}`}>
            <div className={style.dit}></div>
            <div className={style.dit}></div>
          </div>

          <div className={`${style.line} ${style.lineEv}`}>
            <div className={style.dit}></div>
            <div className={style.dit}></div>
          </div>

          <div className={`${style.line} ${style.lineOd}`}>
            <div className={style.dit}></div>
            <div className={style.dit}></div>
          </div>

        </div>
        <div className={style.brandingText}>
          <div className={style.textLine}>WEB</div>
          <div className={style.textLine}>DEV</div>
          <div className={style.textLine}>GOA</div>
        </div>

      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default WebDevGoaWDGLogo;