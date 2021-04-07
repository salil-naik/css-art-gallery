import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function HarshitXiaomi() {
  let data = {
    name: "Harshit Pandey",
    "gh-link": "https://github.com/HarshitPandey251",
    "art-name": "Xiaomi logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        <div className={style.mtext}>
            <div className={style.mInsert}>
                <div className={style.mInner}></div>
            </div>
        </div>
        <div className={style.itext}></div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default HarshitXiaomi;
