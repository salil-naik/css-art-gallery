import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function HarshitAmongUs() {
  let data = {
    name: "Harshit Pandey",
    "gh-link": "https://github.com/HarshitPandey251",
    "art-name": "Among Us",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.player}>
      <div className={style.back}></div>
      <div className={style.glass}></div>
      <div className={style.leg}></div>
      </div>

      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default HarshitAmongUs;
