import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function ShridharGit() {
  let data = {
    name: "Shridhar Kamat",
    "gh-link": "https://github.com/Shridhar-dev/",
    "art-name": "Git logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}    
        <div class={style.main}>
            <div class={style.leg}>
            </div>
            <div class={style.leg2}>
            </div>
        </div>
      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default ShridharGit;
