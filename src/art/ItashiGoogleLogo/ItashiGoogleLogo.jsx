import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function ItashiGoogleLogo() {
  let data = {
    name: "Itashi",
    "gh-link": "https://github.com/Itashi19",
    "art-name": "Google logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        <div className={style.googleLogo}></div>
        <div className={style.after}></div>
        <div className={style.before}></div>

      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default ItashiGoogleLogo;