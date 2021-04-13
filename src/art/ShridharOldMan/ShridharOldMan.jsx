import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function ShridharOldMan() {
  let data = {
    name: "Shridhar Kamat",
    "gh-link": "https://github.com/Shridhar-dev/",
    "art-name": "Old Man Illustration",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}    
          
        <div class={style.main}>
          <div class={style.body}>
            <div class={style.head}></div>
            <div class={style.face}></div>
            <div class={style.neck}></div>
          </div>
            <div class={style.shirt}></div>    
        </div>
     
      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default ShridharOldMan;
