import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function JaagravGithubLogo() {
  let data = {
    name: "Avishake",
    "gh-link": "https://github.com/Avishake007",
    "art-name": "Audi Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.logo}>
      <div className={style.circleone}></div>
      <div className={style.circletwo}></div>
      <div className={style.circlethree}></div>
      <div className={style.circlefour}></div>
      </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default JaagravGithubLogo;
