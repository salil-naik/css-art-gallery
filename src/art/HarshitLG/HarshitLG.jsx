import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function HarshitLG() {
  let data = {
    name: "Harshit Pandey",
    "gh-link": "https://github.com/HarshitPandey251",
    "art-name": "LG logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        <div className={style.lgG}>
        <div className={style.lgEye}></div>
        </div>
      </div>

      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default HarshitLG;
